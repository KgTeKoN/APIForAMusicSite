import { pool } from '../../DB/dbConfig';
import { Request, Response } from 'express';

export async function authorsGet(_req: Request, res: Response): Promise<void> {
	try {
		const authors = await pool.query(`SELECT * FROM users WHERE is_author = $1`, ['true']);
		res.json(authors.rows);
	} catch (e) {
		if (typeof e === 'string') {
			res.json(e);
		} else if (e instanceof Error) {
			res.json(e.message);
		}
	}
}
