import { pool } from '../../DB/dbConfig';
import { userControllerType } from '../../Types/userControllerType';

export const authorsGet: userControllerType = async (_req, res) => {
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
