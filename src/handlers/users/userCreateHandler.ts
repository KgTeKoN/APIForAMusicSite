import { pool } from '../../DB/dbConfig';
import { userCreateHandlerType } from '../../Types/userCreateHandlerType';

export const userCreateHandler: userCreateHandlerType = (name, email, password, isAuthor) => pool.query(
	`INSERT INTO users (name, mail, password, is_Author)
   VALUES ($1, $2, $3, $4) RETURNING *`,
	[name, email, password, isAuthor],
);
