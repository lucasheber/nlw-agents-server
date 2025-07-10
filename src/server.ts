import { fastifyCors } from '@fastify/cors';
import { fastify } from 'fastify';
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { db } from './db/connection.ts';
import { env } from './env.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin: '*', // Allow all origins for development purposes
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get('/health', () => {
    return { message: 'OK' };
});

app.listen({ port: env.PORT });
