import { Router } from 'express';
import { userCreate } from '../../controller/users/userCreate';

export const userRouter = Router();
userRouter.post('/create', userCreate);
