import { Router } from 'express';
import { authorsGet } from '../../controller/users/authorsGet';

export const userAuthorsGetRoute = Router();
userAuthorsGetRoute.get('/authors', authorsGet);
