import { userControllerType } from '../../Types/userControllerType';
import { userGetOneHandler } from '../../handlers/users/userGetOneHandler';

export const userGetOne: userControllerType = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await userGetOneHandler(id);
		res.json(user.rows[0]);
	} catch (e) {
		if (typeof e === 'string') {
			res.json(e);
		} else if (e instanceof Error) {
			res.json(e.message);
		}
	}
};
