import { pool } from '../../DB/dbConfig';

export const userGetOneHandler = (id: string) => pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
