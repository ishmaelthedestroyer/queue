// Generated by CoffeeScript 1.4.0
(function() {

  define(['app'], function(app) {
    return app.factory('Queue', [
      '$rootScope', '$timeout', function($rootScope, $timeout) {
        var apply, queue, remove;
        queue = [];
        apply = function(scope, fn) {
          if (scope.$$phase || scope.$root.$$phase) {
            return fn();
          } else {
            return scope.$apply(fn);
          }
        };
        remove = function(promise, callback) {
          return apply($rootScope, function() {
            var i, _results;
            i = 0;
            _results = [];
            while (i < queue.length) {
              if (queue[i] === promise) {
                queue.splice(i, 1);
                _results.push(typeof callback === "function" ? callback(callback()) : void 0);
              } else {
                _results.push(void 0);
              }
            }
            return _results;
          });
        };
        return {
          list: function() {
            return queue;
          },
          push: function(promise, timeout, callback) {
            apply($rootScope, function() {
              return queue.push(promise);
            });
            promise.then(function() {
              return remove(promise);
            }, function(err) {
              return remove(promise);
            });
            if (timeout) {
              return $timeout(function() {
                return remove(promise, callback);
              }, timeout);
            }
          },
          remove: function(promise) {
            return remove(promise);
          },
          clear: function() {
            return apply($rootScope, function() {
              return queue = [];
            });
          }
        };
      }
    ]);
  });

}).call(this);