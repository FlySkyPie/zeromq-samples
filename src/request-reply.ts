import { Reply, } from "zeromq";
import { Request } from "zeromq";

const createServer = async () => {
    const server = new Reply();
    await server.bind("tcp://127.0.0.1:38989");

    for await (const [requestData] of server) {
        console.log("requestData", requestData);

        await server.send("world!");
    }
}

const createClient = () => {
    const sock = new Request();
    sock.connect("tcp://127.0.0.1:38989");

    setInterval(async () => {
        await sock.send("hello");
        const [result] = await sock.receive();
        console.log("result", result);
    }, 1000);
}

createServer();
createClient();
