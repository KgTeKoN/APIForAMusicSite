import { pool } from '../../DB/dbConfig';
import { Request, Response } from 'express';

export async function userUpdate(req: Request, res: Response): Promise<void> {
	const { name, email, password, isAuthor } = req.body;
	const { id } = req.params;
	try {
		const userUpdate = await pool.query(
			`UPDATE users SET name = $1, mail = $2, password = $3, is_Author = $4 WHERE id = $5 RETURNING *`,
			[name, email, password, isAuthor, id],
		);
		res.json(userUpdate.rows[0]);
	} catch (e) {
		if (typeof e === 'string') {
			res.json(e);
		} else if (e instanceof Error) {
			res.json(e.message);
		}
	}
}
