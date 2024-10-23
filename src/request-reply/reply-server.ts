import { Reply, } from "zeromq";

const createServer = async () => {
    const server = new Reply();
    await server.bind("tcp://127.0.0.1:38989");

    for await (const [requestData] of server) {
        // console.log("requestData", );

        await server.send(requestData.toString() + " world!");
    }
}

createServer();
