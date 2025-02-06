import { SubscriptionInputDTO, SubscriptionOutputDTO, SubscriptionUpdateDTO } from "../SubscriptionDTO";

export interface SubscriptionRepository {

    save(subscription: SubscriptionInputDTO): Promise<void>;
    findById(id: string): Promise<SubscriptionOutputDTO>
    update(subscription: SubscriptionUpdateDTO): Promise<void>;
    deleteById(id: string): void;

}
