import { SubscriptionDTO } from "../subscriptionDTO";
import { CreateSubscriptionUseCase } from "../useCases/CreateSubscriptionUseCase";

export class SubscriptionController {
  constructor(
    private createSubscriptionUseCase: CreateSubscriptionUseCase,

  ) {}

  async createSubscription(data: SubscriptionDTO) {
    return await this.createSubscriptionUseCase.execute(data);
  }

}
