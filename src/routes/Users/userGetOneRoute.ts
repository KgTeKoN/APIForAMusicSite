import { Router } from 'express';
import { userGetOne } from '../../controller/users/userGetOne';

export const userGetOneRoute = Router();
userGetOneRoute.get('/own/id', userGetOne);
