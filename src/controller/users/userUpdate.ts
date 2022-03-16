import { pool } from '../../DB/dbConfig';
import { userControllerType } from '../../Types/userControllerType';

export const userUpdate: userControllerType = async (req, res) => {
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
