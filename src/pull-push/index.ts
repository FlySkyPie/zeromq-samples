import { TsWorker } from "../worker/ts-worker";


const serverWorker = new TsWorker(new URL("./pull-server.ts", import.meta.url));
const clientWorker = new TsWorker(new URL("./push-clients.ts", import.meta.url));
