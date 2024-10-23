import { Worker } from "node:worker_threads";

export class TsWorker extends Worker {
    constructor(filename: URL, options: any = {}) {
        options.workerData ??= {};
        options.workerData.__ts_worker_filename = filename.toString();
        super(new URL("./worker.mjs", import.meta.url), options);
    }
};
