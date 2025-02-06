import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { subscriptionModule } from '@/features/subscriptions/SubscriptionModule';
import { SubscriptionInputDTO, SubscriptionUpdateDTO } from '@/features/subscriptions/SubscriptionDTO';

const subscriptionRoutes: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  fastify.post('/subscriptions', async (request, reply) => {
    const { plan_id, customer_email, status, next_billing_date } = request.body as SubscriptionInputDTO;
    try {
      const response = await subscriptionModule.createSubscription({ plan_id, customer_email, status, next_billing_date });
      return reply.status(201).send(response);
    } catch (error: any) {
      return reply.status(500).send({ error: 'Internal Server Error', message: error.message });
    }
  });

  fastify.get('/subscription/:id', async (request, reply) => {
    try {
      const { id } = request.params as { id: string };

      if (!id) {
        return reply.status(400).send({ error: "Subscription ID is required" });
      }

      const response = await subscriptionModule.getSubscription(id);
      return reply.status(200).send(response);
    } catch (error: any) {
      return reply.status(error.statusCode || 500).send({
        statusCode: error.statusCode || 500,
        error: error.message || "Internal Server Error"
      });
    }
  });

  fastify.put('/subscriptions', async (request, reply) => {
    const { id, customer_email, status } = request.body as SubscriptionUpdateDTO;
    try {
      const response = await subscriptionModule.updateSubscription({ id, customer_email, status });
      return reply.status(201).send(response);
    } catch (error: any) {
      return reply.status(404).send({
        statusCode: error.statusCode,
        error: error.message
      });
    }
  });

};

export default subscriptionRoutes;
