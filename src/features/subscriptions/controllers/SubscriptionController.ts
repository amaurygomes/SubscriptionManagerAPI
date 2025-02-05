import { SubscriptionInputDTO } from "../SubscriptionDTO";
import { CreateSubscriptionUseCase } from "../useCases/CreateSubscriptionUseCase";

export class SubscriptionController {
  constructor(
    private createSubscriptionUseCase: CreateSubscriptionUseCase,

  ) { }

  async createSubscription(data: SubscriptionInputDTO) {
    return await this.createSubscriptionUseCase.execute(data);
  }

}
