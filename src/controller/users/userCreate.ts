import { pool } from '../../DB/dbConfig';
import { Request, Response } from 'express';

export async function userCreate(req: Request, res: Response): Promise<void> {
	const { name, mail, password, isAuthor } = req.body;
	const newUser = await pool.query(`INSERT INTO users (name, mail, password, isAuthor) VALUES ($1, $2, $3, $4) RETURNING *`, [name, mail, password, isAuthor]);
	res.json(newUser.rows[0]);
}