import { SubscriptionInputDTO } from "../SubscriptionDTO";

export interface SubscriptionRepository {

    save(subscription: SubscriptionInputDTO): Promise<void>;
    update(subscription: SubscriptionInputDTO): Promise<void>;
    deleteById(id: string): void;

}
