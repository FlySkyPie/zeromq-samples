import * as zmq from "zeromq"

async function run() {
  const sock = new zmq.Pull()

  sock.connect("tcp://127.0.0.1:38989")
  console.log("Worker connected to port 38989")

  for await (const [msg] of sock) {
    console.log("work: %s", msg.toString())
  }
}

run()