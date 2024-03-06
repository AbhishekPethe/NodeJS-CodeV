libuv 

--what ?--
libuv is a cross platform open source library written in c language

--why ?--
handles asynchronous non-blocking operations in JS

--how ?--
1. Thread Pool
2. Event Loop



--Libuv and Async Methods Summary--
In Node.js, async methods are handled by libuv
They are handled in two different ways
1. Native async mechanism
2. Thread pool

Whenever possible, Libuv will use native async mechanisms in the OS so as to avoid blocking
the main thread
Since this is part of the kernel, there is different mechanism for each OS. We have epoll for
Linux, Kqueue for MacOS and 10 Completion Port on Windows
Relying on native async mechanisms makes Node scalable as the only limitation is the operating
system kernel
Example of this type is a network 1/0 operation

If there is no native async support and the task is file I/O or CPU intensive, libuv
uses the thread pool to avoid blocking the main thread
Although the thread pool preserves asynchronicity with respect to Node's main
thread, it can still become a bottleneck if all threads are busy