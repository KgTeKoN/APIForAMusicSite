import { userControllerType } from '../../Types/userControllerType';
import { userUpdateHandler } from '../../handlers/users/userUpdateHandler';

export const userUpdate: userControllerType = async (req, res) => {
	try {
		const { name, email, password, isAuthor } = req.body;
		const { id } = req.params;
		const userUpdate = await userUpdateHandler(name, email, password, isAuthor, id);
		res.json(userUpdate.rows[0]);
	} catch (e) {
		if (typeof e === 'string') {
			res.json(e);
		} else if (e instanceof Error) {
			res.json(e.message);
		}
	}
};
