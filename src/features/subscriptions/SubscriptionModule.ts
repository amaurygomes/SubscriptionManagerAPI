import { SubscriptionController } from "./controllers/SubscriptionController";
import { SubscriptionRepositoryImpl } from "./repositories/SubscriptionRepositoryImpl";
import { CreateSubscriptionUseCase } from "./useCases/CreateSubscriptionUseCase";
import { GetSubscriptionUseCase } from "./useCases/GetSubscriptionUseCase";
import { UpdateSubscriptionUseCase } from "./useCases/UpdateSubscriptionUseCase";


const subscriptionRepository = new SubscriptionRepositoryImpl();
const createSubscriptionUseCase = new CreateSubscriptionUseCase(subscriptionRepository);
const updateSubscriptionUseCase = new UpdateSubscriptionUseCase(subscriptionRepository);
const getSubscriptionUseCase = new GetSubscriptionUseCase(subscriptionRepository);

const subscriptionModule = new SubscriptionController(
    createSubscriptionUseCase,
    getSubscriptionUseCase,
    updateSubscriptionUseCase,
);

export { subscriptionModule };
