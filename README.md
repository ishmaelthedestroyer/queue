Queue
=====

Asynchronous request manager for AngularJs apps. Whenever you create a promise using the $q library, push a copy of the promise to the Queue using `Queue.push(promise)` When it gets resolved or rejected, the Queue will remove it from the queue. A promise can also manually be removed using `Queue.remove(promise)`  Return all promises using `Queue.list()` and clear them using `Queue.clear()`


When initializing an app, you can synchronize a variable in a controller with the `Queue.list()` function. Because it's an array of objects (promises), whenever the Queue gets updated from any controller, the variable in your master controller will get updated. In your view, show a loading icon when the variable > 0.

The `Queue.push()` function takes two extra optional parameters, timeout and callback. If they are provided, the promise will be removed after x milliseconds and the callback will be fired. Usage might look as follows:

<pre>
deferred = $q.defer()

Queue.push(deferred.promise, 5000, function() {
    alert('Callback fired!');
});
</pre>

After 5 seconds, the promise will be removed and the callback (the alert) will be fired.

###Notes
Developed by <a href='http://twitter.com/ishmaelsalive'>Ishmael</a>. <br />

Feedback, suggestions? Tweet me <a href='http://twitter.com/ishmaelsalive'>@IshmaelsAlive</a>. <br />
Need some personal help? Email me @ <a href='mailto:ishmaelthedestroyer@gmail.com?Subject=LazyNMean'>ishmaelthedestroyer@gmail.com</a>