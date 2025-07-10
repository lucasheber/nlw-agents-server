import { defineConfig } from 'drizzle-kit';
import { env } from './src/env.ts';

export default defineConfig({
    schema: './src/db/schema/**.ts',
    casing: 'snake_case',
    out: './src/db/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: env.DATABASE_URL,
    },
});