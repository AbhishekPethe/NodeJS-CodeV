---EVENT LOOP---

--Event Loop Execution Order--

User written JS synchronous code takes priority over the async code that the 
runtime would like to execute
Only after the call stack is empty , the event loop comes into the picture

--Event Loop - Execution Order--
1. Any callbacks in the micro task queues are executed. First, tasks in the nextTick queue and
only then tasks in the promise queue
2. All callbacks within the timer queue are executed
3. Callbacks in the micro task queues if present are executed. Again, first tasks in the nextTick queue and then tasks in the promise queue
4. All callbacks within the 1/0 queue are executed
5. Callbacks in the micro task queues if present are executed. nextTick queue followed by
Promise queue.
6. All callbacks in the check queue are executed
7. Callbacks in the micro task queues if present are executed. Again, first tasks in the nextTick
queue and then tasks in the promise queue
8. All callbacks in the close queue are executed
9. For one final time in the same loop, the micro task queues are executed. nextTick queue
followed by promise queue.


If there are more callbacks to be processed, the loop is kept alive for one more run
and the same steps are repeated
On the other hand, if all callbacks are executed and there is no more code to
process, the event loop exits.

- We use process.nextTick() method to queue into the nextTick queue
- We resolve or reject a Promise to queue into the Promise queue
- We use setTimeout or setInterval to queue into the timer queue
- Execute an async method to queue into the I/O queue
- Use setImmediate function to queue into the check queue and finally
- Attach close event listeners to queue into the close queue
- The order of execution follows the same order listed here
- nextTick and Promise queues are executed in between each queue and also in between each
callback execution in the timer and check queues


![Event Loop 2](https://github.com/AbhishekPethe/NodeJS-CodeV/assets/82797230/f26a5840-8b82-4985-93ae-a770133bd3ea)



![Event Loop (1)](https://github.com/AbhishekPethe/NodeJS-CodeV/assets/82797230/6125a498-b655-4500-85c1-37d446c6f0cc)
