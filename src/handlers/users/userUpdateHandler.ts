import { pool } from '../../DB/dbConfig';
import { userUpdateHandlerType } from '../../Types/userUpdateHandlerType';

export const userUpdateHandler: userUpdateHandlerType = (name, email, password, isAuthor, id) => pool.query(
	`UPDATE users SET name = $1, mail = $2, password = $3, is_Author = $4 WHERE id = $5 RETURNING *`,
	[name, email, password, isAuthor, id],
);