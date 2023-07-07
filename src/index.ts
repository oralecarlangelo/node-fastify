import fastify, { FastifyInstance, FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import fastifyJwt, { FastifyJWTOptions } from '@fastify/jwt';
import dotenv from 'dotenv';
import fp from 'fastify-plugin';
import userModule from './modules/user';
import authModule from './modules/auth';

dotenv.config();
const server: FastifyInstance = fastify({ logger: true });
server.register(fastifyJwt, {
  secret: process.env.JWT_SECRET || "jwt_secret"
})

server.decorate("authenticate", async function (request: any, reply: any) {
  try {
    await request.jwtVerify()
  } catch (err) {
    reply.send(err)
  }
})

// Register your modules
server.register(userModule, { prefix: '/api/users' });
server.register(authModule, { prefix: '/api/auth' });

// Start the server
const start = async () => {
  const PORT = 7000;
  try {
    await server.listen({ port: PORT });
    server.log.info(`Server listening on ${PORT}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
