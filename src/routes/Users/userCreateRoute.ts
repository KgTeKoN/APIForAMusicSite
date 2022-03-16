import { Router } from 'express';
import { userCreate } from '../../controller/users/userCreate';

export const userCreateRouter = Router();
userCreateRouter.post('/create', userCreate);
