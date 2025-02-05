import { SUCCESS_MESSAGES } from "@/messages/Message";
import { SubscriptionInputDTO } from "../SubscriptionDTO";
import { CreateSubscriptionUseCase } from "../useCases/CreateSubscriptionUseCase";

export class SubscriptionController {
  constructor(
    private createSubscriptionUseCase: CreateSubscriptionUseCase,

  ) { }

  async createSubscription(data: SubscriptionInputDTO) {
    await this.createSubscriptionUseCase.execute(data);
    return {
      statuscode: 201,
      message: SUCCESS_MESSAGES.subscriptionCreated(data.customer_email)
    }
  }

}
