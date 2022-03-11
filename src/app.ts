import express, { Express } from 'express';
import { Server } from 'http';

export class App {
    port: Number;
    app: Express;
    server: Server;

    constructor() {
        this.app = express();
        this.port = 8000;
    }

    async init(): Promise<void> {
        this.server = this.app.listen(this.port);
        console.log(`Server was started on http://localhost:${this.port}`)
    }

    close(): void {
        this.server.close();
    }
}
