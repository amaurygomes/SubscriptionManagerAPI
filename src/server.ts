import Fastify from 'fastify';
import planRoutes from './routes/planRoutes';

const fastify = Fastify();

fastify.register(planRoutes);

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});
