import { FastifyPluginAsync } from "fastify"

const ChatController: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/chat', async function (request, reply) {
    return 'this is an chat'
  })
}

export default ChatController;
