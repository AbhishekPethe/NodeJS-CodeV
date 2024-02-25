--Buffers--

30 - Seating capacity

Scenario 1
100 - People arrival
30 - People accommoda
70 - People in queue (Waiting)

Scenario 2

1 - Person arrive
Wait for at least 10


Area where people wait is nothing but the buffer
Node.js cannot control the pace at which data
arrives in the stream
It can only decide when is the right time to send
the data for processing
If there is data already processed or too little
data to process, Node puts the arriving data in
a buffer
It is an intentionally small area that Node
maintains in the runtime to process a stream of
data


Ex: streaming a video online
If your internet connection is fast enough, the speed of the stream will be fast enough to
instantly fill up the buffer and send it out for processing
That will repeat till the stream is finished
If your connection is slow, after processing the first chunk of data that arrived, the video
player will display a loading spinner which indicates it is waiting for more data to arrive
Once the buffer is filled up and the data is processed, the video player shows the video
While the video is playing, more data will continue to arrive and wait in the buffer