import * as zmq from "zeromq"

async function run(clientId: number) {
  const sock = new zmq.Pull();

  sock.connect("tcp://127.0.0.1:38989");

  for await (const [msg] of sock) {
    console.log(`work ${clientId}: %s`, msg.toString())
  }
}

for (let index = 0; index < 10; index++) {
  run(index);
}

