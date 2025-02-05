import { SubscriptionDTO } from "../SubscriptionDTO";

export interface SubscriptionRepository {

    save(subscription: SubscriptionDTO): void;
    deleteById(id: string): void;

}
