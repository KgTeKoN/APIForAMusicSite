import { pool } from '../../DB/dbConfig';
import { userControllerType } from '../../Types/userControllerType';

export const userDelete: userControllerType = async (req, res) => {
	const { id } = req.params;
	try {
		const userDelete = await pool.query(`DELETE FROM users WHERE id = $1`, [id]);
		res.json(userDelete.rows[0]);
	} catch (e) {
		if (typeof e === 'string') {
			res.json(e);
		} else if (e instanceof Error) {
			res.json(e.message);
		}
	}
}
