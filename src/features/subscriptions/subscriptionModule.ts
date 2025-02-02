import { SubscriptionController } from "./controllers/SubscriptionController";
import { SubscriptionRepositoryImpl } from "./repositories/SubscriptionRepositoryImpl";
import { CreateSubscriptionUseCase } from "./useCases/CreateSubscriptionUseCase";


const subscriptionRepository = new SubscriptionRepositoryImpl();
const createSubscriptionUseCase = new CreateSubscriptionUseCase(subscriptionRepository);

const subscriptionModule = new SubscriptionController(createSubscriptionUseCase);

export { subscriptionModule };
