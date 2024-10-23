import * as zmq from "zeromq"

const createClient = async (clinetId: number) => {
  const sock = new zmq.Subscriber();

  sock.connect("tcp://127.0.0.1:38989");
  sock.subscribe("kitty cats");

  for await (const [topic, msg] of sock) {
    console.log(
      `${clinetId} received a message related to:`,
      topic.toString(),
      "containing message:",
      msg.toString(),
    )
  }
}

for (let index = 0; index < 10; index++) {
  createClient(index);
}
