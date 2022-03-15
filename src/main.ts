import { App } from './app';
import { userRouter } from './routes/routeUserCreate';
import express from 'express';

const app = new App();

app.app.use(express.json());
app.app.use('/user', userRouter);

async function bootstrap(): Promise<void> {
	await app.init();
}

bootstrap();
