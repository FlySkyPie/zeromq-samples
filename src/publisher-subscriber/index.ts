import { TsWorker } from "../worker/ts-worker";


const serverWorker = new TsWorker(new URL("./publisher-server.ts", import.meta.url));
const clientWorker = new TsWorker(new URL("./subscriber-clients.ts", import.meta.url));
