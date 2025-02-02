import { SubscriptionRepository } from "../repositories/SubscriptionRepository";
import { SubscriptionDTO } from "../subscriptionDTO";
import { SubscriptionStatus } from "../entities/Subscription";

export class CreateSubscriptionUseCase {
  constructor(private subscriptionRepository: SubscriptionRepository) {}

  execute(subscriptionData: SubscriptionDTO): SubscriptionDTO  {
    const subscriptionToSave: SubscriptionDTO = {
      ...subscriptionData,
      status: subscriptionData.status ?? SubscriptionStatus.PENDING,
    };

    this.subscriptionRepository.save(subscriptionToSave);
    return subscriptionToSave;
  }
}
