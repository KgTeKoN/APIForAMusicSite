import { pool } from '../../DB/dbConfig';

export const userDeleteHandler = (id: string) => pool.query(`DELETE FROM users WHERE id = $1`, [id]);
