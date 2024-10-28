import * as zmq from "zeromq";

async function createClient(nodeId: number) {
  const sock = new zmq.Push();

  sock.connect("tcp://127.0.0.1:38989");
  // console.log("Producer bound to port 38989");

  while (true) {
    // console.log(`${nodeId}: Send some work`);
    await sock.send(`${nodeId}: some work`); // This would blocked if no Pull is connrected.
    await new Promise(resolve => {
      setTimeout(resolve, 500);
    });
  }
}

for (let index = 0; index < 10; index++) {
  setTimeout(() => {
    createClient(index);
  }, 1000 * Math.random());
}
