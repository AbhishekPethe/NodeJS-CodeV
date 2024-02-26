     ---Asynchronous JavaScript---


JavaScript is a synchronous, blocking,
single-threaded language

--Synchronous--
If we have two functions which log messages to the
console, code executes top down, with only one line
executing at any given time

--Blocking--
No matter how long a previous process takes, the
subsequent processes won't kick off until the former
is completed
Ex. Web app runs in a browser and it executes an
intensive chunk of code without returning control to
the browser, the browser can appear to be frozen

--Single-threaded--
A thread is simply a process that your javascript
program can use to run a task
Each thread can only do one task at a time
JavaScript has just the one thread called the main
thread for executing any code


Problem with synchronous, blocking, single-threaded model of JavaScript ->

let response = fetchDataFromDB(' endpoint' )
displayDataFromDB( response )

fetchDataFromDB('endpoint") could take 1 second or even more
During that time, we can't run any further code
JavaScript, if it simply proceeds to the next line without waiting, we have an error
because data is not what we expect it to be

Just JavaScript is not enough
We need new pieces which are outside of JavaScript to help us write asynchronous code
For front-end, this is where web browsers come into play. For back-end, this is where
Node.js comes into play
Web browsers and Node.js define functions and APls that allow us to register functions
that should not be executed synchronously, and should instead be invoked
asynchronously when some kind of event occurs
For example, that could be the passage of time ( setTimeout or setinterval), the user's
interaction with the mouse (addEventListener), data being read from a file system or the
arrival of data over the network (callbacks, Promises, async-await)
You can let your code do several things at the same time without stopping or blocking
your main thread