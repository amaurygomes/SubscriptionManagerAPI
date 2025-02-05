import { SubscriptionRepository } from "../repositories/SubscriptionRepository";
import { SubscriptionInputDTO } from "../SubscriptionDTO";



export class CreateSubscriptionUseCase {
  constructor(private subscriptionRepository: SubscriptionRepository) { }

  async execute(subscriptionData: SubscriptionInputDTO): Promise<void> {
    await this.subscriptionRepository.save(subscriptionData);
    return
  }
}
