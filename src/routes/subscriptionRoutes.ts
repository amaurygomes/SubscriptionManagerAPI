import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { subscriptionModule } from '@/features/subscriptions/SubscriptionModule';
import { SubscriptionDTO } from '@/features/subscriptions/SubscriptionDTO';

const subscriptionRoutes: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  fastify.post('/subscriptions', async (request, reply) => {
    const { plan_id, customer_email, status, next_billing_date } = request.body as SubscriptionDTO;
    try {
      const response = await subscriptionModule.createSubscription({ plan_id, customer_email, status, next_billing_date });
      return reply.status(201).send(response);
    } catch (error: any) {
      return reply.status(500).send({ error: 'Internal Server Error', message: error.message });
    }
  });
};

export default subscriptionRoutes;
