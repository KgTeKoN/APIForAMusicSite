import { pool } from '../../DB/dbConfig';

export const authorsGetHandler = () => pool
	.query(`SELECT * FROM users WHERE is_author = $1`, ['true']);
