import { userControllerType } from '../../Types/userControllerType';
import { authorsGetHandler } from '../../handlers/users/authorsGetHandler';

export const authorsGet: userControllerType = async (_req, res) => {
	try {
		const authors = await authorsGetHandler();
		res.json(authors.rows);
	} catch (e) {
		if (typeof e === 'string') {
			res.json(e);
		} else if (e instanceof Error) {
			res.json(e.message);
		}
	}
}
