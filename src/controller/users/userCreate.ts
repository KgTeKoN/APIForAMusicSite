import { userControllerType } from '../../Types/userControllerType';
import { userCreateHandler } from '../../handlers/users/userCreateHandler';

export const userCreate: userControllerType = async (req, res) => {
	try {
		const { name, email, password, isAuthor } = req.body;
		const newUser = await userCreateHandler(name, email, password, isAuthor);
		res.json(newUser.rows[0]);
	} catch (e) {
		if (typeof e === 'string') {
			res.json(e);
		} else if (e instanceof Error) {
			res.json(e.message);
		}
	}
};
