import { Request } from "zeromq";

const createServer = async () => {
    const server = new Request();
    await server.bind("tcp://127.0.0.1:38989");

    setInterval(async () => {
        // This would keep order to request clients one by one
        // await server.send("hello");

        // This would request clients one by one but randomly.
        // await server.send(["hello",]);

        // The client need read multiple messages.
        await server.send(["hello-1", "hello-2"]);
        const [result] = await server.receive();
        console.log("result", result.toString());
    }, 1000);
}

createServer();
