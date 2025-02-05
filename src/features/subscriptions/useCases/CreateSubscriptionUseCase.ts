import { SubscriptionStatus } from "@/enums/SubscriptionStatus";
import { SubscriptionRepository } from "../repositories/SubscriptionRepository";
import { SubscriptionInputDTO } from "../SubscriptionDTO";



export class CreateSubscriptionUseCase {
  constructor(private subscriptionRepository: SubscriptionRepository) { }

  execute(subscriptionData: SubscriptionInputDTO): SubscriptionInputDTO {



    const subscriptionToSave: SubscriptionInputDTO = {
      ...subscriptionData,
      status: subscriptionData.status ?? SubscriptionStatus.PENDING,
    };

    this.subscriptionRepository.save(subscriptionToSave);
    return subscriptionToSave;
  }
}
