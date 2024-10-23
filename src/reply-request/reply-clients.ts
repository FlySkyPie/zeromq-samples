import { Reply } from "zeromq";

const createClient = async (clientId: number) => {
    const sock = new Reply();
    sock.connect("tcp://127.0.0.1:38989");

    // for await (const [requestData] of sock) {
    //     await sock.send(requestData.toString() + ` world! from ${clientId}`);
    // }

    for await (const [data1, data2] of sock) {
        await sock.send(data1.toString() + " and " + data2.toString() + ` world! from ${clientId}`);
    }
}

for (let index = 0; index < 10; index++) {
    createClient(index);
}
