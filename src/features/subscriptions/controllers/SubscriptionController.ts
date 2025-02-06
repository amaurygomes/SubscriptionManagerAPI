import { SUCCESS_MESSAGES } from "@/messages/Message";
import { SubscriptionInputDTO, SubscriptionOutputDTO, SubscriptionUpdateDTO } from "../SubscriptionDTO";
import { CreateSubscriptionUseCase } from "../useCases/CreateSubscriptionUseCase";
import { UpdateSubscriptionUseCase } from "../useCases/UpdateSubscriptionUseCase";
import { GetSubscriptionUseCase } from "../useCases/GetSubscriptionUseCase";

export class SubscriptionController {
  constructor(
    private createSubscriptionUseCase: CreateSubscriptionUseCase,
    private getSubscriptionUseCase: GetSubscriptionUseCase,
    private updateSubscriptionUseCase: UpdateSubscriptionUseCase,
  ) { }

  async createSubscription(data: SubscriptionInputDTO) {
    await this.createSubscriptionUseCase.execute(data);
    return {
      statuscode: 201,
      message: SUCCESS_MESSAGES.subscriptionCreated(data.customer_email)
    }
  }
  async getSubscription(id: string): Promise<SubscriptionOutputDTO> {
    return await this.getSubscriptionUseCase.execute(id)
  }

  async updateSubscription(data: SubscriptionUpdateDTO) {
    await this.updateSubscriptionUseCase.execute(data);
    return {
      statuscode: 201,
      message: SUCCESS_MESSAGES.subscriptionUpdated(data.id)
    }
  }

}
