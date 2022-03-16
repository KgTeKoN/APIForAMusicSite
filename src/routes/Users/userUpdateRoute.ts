import { Router } from 'express';
import { userUpdate } from '../../controller/users/userUpdate';

export const userUpdateRoute = Router();
userUpdateRoute.patch('/update/:id', userUpdate);
