export type MyPluginsFastifyInstance = FastifyInstance & { authenticate?: Promise<void>; }