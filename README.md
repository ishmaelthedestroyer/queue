uiAuth
======

Asynchronous request manager for AngularJs apps. Whenever you create a promise using the $q library, push a copy of the promise to the Queue using `Queue.push(promise)` When it gets resolved or rejected, the Queue will remove it from the queue. A promise can also manually be removed using `Queue.remove(promise)`  Return all promises using `Queue.list()` and clear them using `Queue.clear()`

When initializing an app, you can synchronize a variable in a controller with the `Queue.list()` function. In your view, show a loading icon when the variable > 0.

###Notes
Developed by <a href='http://twitter.com/ishmaelsalive'>Ishmael</a>. <br />

Feedback, suggestions? Tweet me <a href='http://twitter.com/ishmaelsalive'>@IshmaelsAlive</a>. <br />
Need some personal help? Email me @ <a href='mailto:ishmaelthedestroyer@gmail.com?Subject=LazyNMean'>ishmaelthedestroyer@gmail.com</a>