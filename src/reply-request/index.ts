import { TsWorker } from "../worker/ts-worker";


const serverWorker = new TsWorker(new URL("./request-server.ts", import.meta.url));
const clientWorker = new TsWorker(new URL("./reply-clients.ts", import.meta.url));
