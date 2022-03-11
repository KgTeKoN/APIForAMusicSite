import { App } from './app';

const app = new App();

async function bootstrap(): Promise<void> {
	await app.init();
}

bootstrap();
