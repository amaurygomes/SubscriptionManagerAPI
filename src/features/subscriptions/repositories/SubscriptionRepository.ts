import { SubscriptionDTO } from "../subscriptionDTO";

export interface SubscriptionRepository {

    save(subscription: SubscriptionDTO): void;
    deleteById(id: string): void;
    
}
