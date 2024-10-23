import { Request } from "zeromq";

const createClient = (clientId: number) => {
    const sock = new Request();
    sock.connect("tcp://127.0.0.1:38989");

    setInterval(async () => {
        await sock.send(`${clientId}:hello`);
        const [result] = await sock.receive();
        console.log("result", result.toString());
    }, 1000);
}

for (let index = 0; index < 10; index++) {
    setTimeout(() => {
        createClient(index);
    }, 1000 * Math.random())
}
