import { SubscriptionRepository } from "../repositories/SubscriptionRepository";
import { SubscriptionOutputDTO } from "../SubscriptionDTO";

export class GetSubscriptionUseCase {
    constructor(private subscriptionRepository: SubscriptionRepository) { }

    async execute(id: string): Promise<SubscriptionOutputDTO> {
        const subscription = await this.subscriptionRepository.findById(id)
        return subscription
    }
}