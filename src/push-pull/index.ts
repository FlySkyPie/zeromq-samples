import { TsWorker } from "../worker/ts-worker";


const serverWorker = new TsWorker(new URL("./push-server.ts", import.meta.url));
const clientWorker = new TsWorker(new URL("./pull-clients.ts", import.meta.url));
