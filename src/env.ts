import { z } from 'zod';

const envSchema = z.object({
    DEBUG: z.coerce.boolean().default(false),
    PORT: z.coerce.number().default(3000),
    DATABASE_URL: z.string().startsWith('postgresql://'),
});

export const env = envSchema.parse(process.env);
