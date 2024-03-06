---Thread Pool---

Main thread:
"Hey libuv, I need to read file contents but that is a time consuming task. I don't
want to block further code from being executed during this time. Can I offload this
task to you?"

Libuv:
"Sure, main thread. Unlike you, who is single threaded, I have a pool of threads
that I can use to run some of these time consuming tasks. When the task is done,
the file contents are retrieved and the associated callback function can be run."

---Network I/O---

https.request is a network input/output operation and not a CPU bound operation
It does not use the thread pool
Libuv instead delegates the work to the operating system kernel and whenever
possible, it will poll the kernel and see if the request has completed


![Thread Pool Size](https://github.com/AbhishekPethe/NodeJS-CodeV/assets/82797230/109cb114-7807-4147-bdce-9d4c6cd5be68)
