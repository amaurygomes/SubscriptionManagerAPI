import { SubscriptionRepository } from "../repositories/SubscriptionRepository";
import { Billing_Cycle, SubscriptionDTO, SubscriptionStatus } from "../subscriptionDTO";


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
