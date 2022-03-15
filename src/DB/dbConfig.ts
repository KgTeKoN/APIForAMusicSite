import { Pool } from 'pg';

export const pool = new Pool( {
	user: "postgres",
	password: "2703",
	host: "localhost",
	port: 5432,
	database: "Music_API"
});

