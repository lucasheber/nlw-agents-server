import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import { z } from 'zod/v4';
import { db } from '../../db/connection.ts';
import { schema } from '../../db/schema/index.ts';

export const createRoomRoute: FastifyPluginCallbackZod = (app) => {
    app.post('/rooms', {
        schema: {
            body: z.object({
                name: z.string().min(1, 'Name is required'),
                description: z.string().optional(),
            }),
        },
    },
        async (request, reply) => {
            const { name, description } = request.body;

            const [room] = await db.insert(schema.rooms).values({
                name,
                description,
            }).returning({
                id: schema.rooms.id,
                name: schema.rooms.name,
                description: schema.rooms.description,
                createdAt: schema.rooms.createdAt,
            });

            return reply.status(201).send(room);
        }
    )
};