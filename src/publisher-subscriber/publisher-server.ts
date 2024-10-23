import * as zmq from "zeromq"

async function run() {
  const sock = new zmq.Publisher()

  await sock.bind("tcp://127.0.0.1:38989")
  console.log("Publisher bound to port 38989")

  while (true) {
    console.log("sending a multipart message envelope")
    await sock.send(["kitty cats", "meow!"])
    await new Promise(resolve => {
      setTimeout(resolve, 500)
    })
  }
}

run()