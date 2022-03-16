import { Request, Response } from 'express';

export type userControllerType = (req: Request, res: Response) => Promise<void>;
