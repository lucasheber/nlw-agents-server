import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { env } from '../env.ts';
import { schema } from './schema/index.ts';

export const sql = postgres(env.DATABASE_URL);
export const db = drizzle(sql, {
    schema,
    logger: env.DEBUG, // Enable logging for debugging purposes
    casing: 'snake_case', // Use snake_case for database columns
});
