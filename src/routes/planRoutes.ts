import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { planModule } from '@/features/plans/PlanModule';
import { Billing_Cycle } from '@/enums/BillingCycle';




interface CreatePlan {
  name: string;
  price: number;
  isActive: boolean;
  billing_cycle: Billing_Cycle;
}

const planRoutes: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  fastify.get('/plans', async (request, reply) => {
    try {
      const response = await planModule.getPlans();
      return reply.status(200).send(response);
    } catch (error: any) {
      return reply.status(404).send({
        statusCode: error.statusCode,
        error: error.message
      });
    }
  });

  fastify.post('/plans', async (request, reply) => {
    try {
      const { name, price, isActive, billing_cycle } = request.body as CreatePlan;
      const response = await planModule.createPlan({ name, price, isActive, billing_cycle });
      return reply.status(201).send(response);
    } catch (error: any) {
      return reply.status(404).send({
        statusCode: error.statusCode,
        error: error.message
      });
    }
  });

  fastify.delete('/plans/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    try {
      const response = await planModule.deletePlan(id);
      return reply.status(200).send(response);
    } catch (error: any) {
      return reply.status(404).send({
        statusCode: error.statusCode,
        error: error.message
      });
    }
  });
};

export default planRoutes;
