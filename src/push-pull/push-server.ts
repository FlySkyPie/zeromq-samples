import * as zmq from "zeromq"

async function run() {
  const sock = new zmq.Push()

  await sock.bind("tcp://127.0.0.1:38989")
  console.log("Producer bound to port 38989")

  while (true) {
    console.log("Send some work");
    await sock.send("some work"); // This would blocked if no Pull is connrected.
    await new Promise(resolve => {
      setTimeout(resolve, 500);
    });
  }
}

run()