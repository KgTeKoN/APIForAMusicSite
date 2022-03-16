import { pool } from '../../DB/dbConfig';
import { userControllerType } from '../../Types/userControllerType';

export const userGetOne:userControllerType = async (req, res) => {
	const { id } = req.params;
	try {
		const user = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
		res.json(user.rows[0]);
	} catch (e) {
		if (typeof e === 'string') {
			res.json(e);
		} else if (e instanceof Error) {
			res.json(e.message);
		}
	}
}
