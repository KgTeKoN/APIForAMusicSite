import { App } from './app';
import express from 'express';
import { userRouter } from './routes/Users/userCreateRoute';
import { userGetOneRoute } from './routes/Users/userGetOneRoute';

const app = new App();

app.app.use(express.json());
app.app.use('/user', userRouter);
app.app.use('/user', userGetOneRoute);

async function bootstrap(): Promise<void> {
	await app.init();
}

bootstrap();
