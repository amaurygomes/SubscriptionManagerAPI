import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { planModule } from '@/features/plans/planModule';
import { Billing_Cycle } from '@/features/plans/planDTO';


interface CreatePlan {
  name: string;
  price: number;
  billing_cycle: Billing_Cycle;
}

const planRoutes: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  fastify.get('/plans', async (request, reply) => {
    const response = await planModule.getPlans();
    return reply.status(200).send(response); 
  });

  fastify.post('/plans', async (request, reply) => {
    const { name, price, billing_cycle } = request.body as CreatePlan;
    const response = await planModule.createPlan({ name, price, billing_cycle });
    return reply.status(201).send(response);
  });

  fastify.delete('/plans/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    try {
      const response = await planModule.deletePlan(id); 
      return reply.status(200).send(response);
    } catch (error: any) {
      return reply.status(404).send({ error: error.message });
    }
  });
};

export default planRoutes;
