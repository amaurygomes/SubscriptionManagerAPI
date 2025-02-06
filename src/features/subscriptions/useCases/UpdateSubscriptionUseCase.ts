import { SubscriptionRepository } from "../repositories/SubscriptionRepository";
import { SubscriptionUpdateDTO } from "../SubscriptionDTO";



export class UpdateSubscriptionUseCase {
  constructor(private subscriptionRepository: SubscriptionRepository) { }

  async execute(subscriptionData: SubscriptionUpdateDTO): Promise<void> {
    await this.subscriptionRepository.update(subscriptionData);
    return
  }
}
