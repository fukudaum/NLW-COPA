import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from '@fastify/jwt';

import { poolRoutes } from "./routes/pool";
import { userRoutes } from "./routes/user";
import { guessRoutes } from "./routes/guess";
import { gameRoutes } from "./routes/game";
import { authRoutes } from "./routes/auth";

async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    });

    await fastify.register(cors, {
        origin: true,
    });

    //em produção deixar no .env
    await fastify.register(jwt, {
        secret: 'nlwcopa',
    })

    await fastify.register(poolRoutes);
    await fastify.register(userRoutes);
    await fastify.register(guessRoutes);
    await fastify.register(gameRoutes);
    await fastify.register(authRoutes);

    await fastify.listen({
        port: 3333,
        host: '0.0.0.0',
    });
}

bootstrap();