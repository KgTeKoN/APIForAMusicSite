import { pool } from '../../DB/dbConfig';
import { userControllerType } from '../../Types/userControllerType';

export const userCreate: userControllerType = async (req, res) => {
	const { name, email, password, isAuthor } = req.body;
	try {
		const newUser = await pool.query(
			`INSERT INTO users (name, mail, password, is_Author)
                                      VALUES ($1, $2, $3, $4) RETURNING *`,
			[name, email, password, isAuthor],
		);
		res.json(newUser.rows[0]);
	} catch (e) {
		if (typeof e === 'string') {
			res.json(e);
		} else if (e instanceof Error) {
			res.json(e.message);
		}
	}
}
