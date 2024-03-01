--Streams--
A stream is a sequence of data that is being moved from one point to another over
time
Ex: a stream of data over the internet being moved from one computer to another
Ex: a stream of data being transferred from one file to another within the same
computer
Process streams of data in chunks as they arrive instead of waiting for the entire
data to be available before processing

Ex: watching a video on YouTube
The data arrives in chunks and you watch in chunks while the rest of the data
arrives over time

Ex: transferring file contents from fileA to fileB
The contents arrive in chunks and you transfer in chunks while the remaining
contents arrive over time


--Types of Streams--

Readable streams from which data can be read
Writable streams to which we can write data
Duplex streams that are both Readable and Writable
Transform streams that can modify or transform the data as it is written and read
Ex: Reading from a file as readable stream
Ex: Writing to a file as writable stream
Ex: Sockets as a duplex stream
Ex: File compression where you can write compressed data and read
de-compressed data to and from a file as a transform stream