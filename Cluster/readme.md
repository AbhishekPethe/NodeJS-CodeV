=== CLUSTER ===

- Master is only in charge of the workers

- Workers are in charge of handling
incoming requests, reading files etc

- Each worker gets its own event loop,
memory, and V8 instance

- We should only create as many workers as there are CPU cores on the machine the app is running

- If you create more workers than there are logical cores on the computer it can cause an overhead as the system will have to schedule all the created workers with fewer number of cores



=== WORKER THREADS ===

- The worker_threads module enables the use of threads that execute JavaScript in parallel
- Code executed in a worker thread runs in a separate child process, preventing it
from blocking your main application
- The cluster module can be used to run multiple instances of Node.js that can
distribute workloads
- worker_threads module allows running multiple application threads within a single
Node js instance
- When process isolation is not needed, that is, no separate instances of V8, event
loop and memory are needed, you should use worker_threads