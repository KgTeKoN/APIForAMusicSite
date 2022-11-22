import { Router } from 'express';
import { userDelete } from '../../controller/users/userDelete';

export const userDeleteRoute = Router();
userDeleteRoute.delete('/delete/:id', userDelete);
