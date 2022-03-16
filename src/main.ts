import { App } from './app';
import express from 'express';
import { userCreateRouter } from './routes/Users/userCreateRoute';
import { userGetOneRoute } from './routes/Users/userGetOneRoute';
import { userAuthorsGetRoute } from './routes/Users/userAuthorsGetRoute';
import { userDeleteRoute } from './routes/Users/userDeleteRoute';
import { userUpdateRoute } from './routes/Users/userUpdateRoute';


const app = new App();

app.app.use(express.json());
app.app.use('/user', userCreateRouter);
app.app.use('/user', userGetOneRoute);
app.app.use('/user', userAuthorsGetRoute);
app.app.use('/user', userDeleteRoute);
app.app.use('/user', userUpdateRoute);

async function bootstrap(): Promise<void> {
	await app.init();
}

bootstrap();
