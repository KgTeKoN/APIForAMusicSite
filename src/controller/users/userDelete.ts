import { userControllerType } from '../../Types/userControllerType';
import { userDeleteHandler } from '../../handlers/users/userDeleteHandler';

export const userDelete: userControllerType = async (req, res) => {
	try {
		const { id } = req.params;
		const userDelete = await userDeleteHandler(id);
		res.json(userDelete.rows[0]);
	} catch (e) {
		if (typeof e === 'string') {
			res.json(e);
		} else if (e instanceof Error) {
			res.json(e.message);
		}
	}
};
