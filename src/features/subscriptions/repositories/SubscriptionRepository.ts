import { SubscriptionInputDTO } from "../SubscriptionDTO";


export interface SubscriptionRepository {

    save(subscription: SubscriptionInputDTO): void;
    deleteById(id: string): void;

}
