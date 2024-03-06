---Thread Pool---

Main thread:
"Hey libuv, I need to read file contents but that is a time consuming task. I don't
want to block further code from being executed during this time. Can I offload this
task to you?"

Libuv:
"Sure, main thread. Unlike you, who is single threaded, I have a pool of threads
that I can use to run some of these time consuming tasks. When the task is done,
the file contents are retrieved and the associated callback function can be run."

![Uploading Thread Pool Size.png…]()
