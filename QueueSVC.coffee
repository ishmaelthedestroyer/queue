define [
  'app'
],(app) ->
  app.factory 'Queue', [
    '$rootScope'
    '$timeout'
    ($rootScope, $timeout) ->
      queue = []
      apply = (scope, fn) ->
        if scope.$$phase or scope.$root.$$phase
          fn()
        else
          scope.$apply fn

      remove = (promise, callback) ->
        apply $rootScope, () ->
          i = 0
          while i < queue.length
            if queue[i] is promise
              queue.splice i, 1
              callback? callback()

      # return methods
      list: () ->
        queue
      push: (promise, timeout, callback) ->
        # add to queue
        apply $rootScope, () ->
          queue.push promise

        # when resolved (or rejected), remove from queue
        promise.then () ->
          remove promise
        , (err) ->
          remove promise

        # if timeout set, remove & call optional callback
        if timeout
          $timeout ->
            remove promise, callback
          , timeout
      remove: (promise) ->
        remove promise
      clear: () ->
        apply $rootScope, () ->
          queue = []
  ]