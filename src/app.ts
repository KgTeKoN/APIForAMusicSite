import express, { Express } from 'express';
import { Server } from 'http';
import { startServer } from './logger/loggerServer';

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
		startServer(this.port as number);
	}

	close(): void {
		this.server.close();
	}
}
