import { SubscriptionStatus } from "@/enums/SubscriptionStatus";

import { SubscriptionRepository } from "./SubscriptionRepository";
import { SubscriptionInputDTO } from "../SubscriptionDTO";
import { Subscription } from "../entities/Subscription";
import { calculateExpirationDate } from "../helpers/SubscriptionDateExpirationHelper";

export class SubscriptionRepositoryImpl implements SubscriptionRepository {
    private subscriptions: SubscriptionInputDTO[] = [
        {
            plan_id: 'plan_1',
            customer_email: 'user1@email.com',
            status: SubscriptionStatus.PENDING,
            next_billing_date: new Date("2025-10-10")
        },
        {
            plan_id: 'plan_2',
            customer_email: 'user2@email.com',
            status: SubscriptionStatus.ACTIVE,
            next_billing_date: new Date("2025-11-15")
        },
        {
            plan_id: 'plan_3',
            customer_email: 'user3@email.com',
            status: SubscriptionStatus.SUSPENDED,
            next_billing_date: new Date("2025-12-20")
        }
    ];

    save(subscription: SubscriptionInputDTO): void {
        const next_billing_date = calculateExpirationDate(subscription.next_billing_date)
        const new Subscription(subscription.plan_id, subscription.customer_email, subscription.status,)
    }

    deleteById(id: string): void {
        const index = this.subscriptions.findIndex(sub => sub.plan_id === id);
        if (index === -1) {
            throw new Error(`Assinatura com ID ${id} não encontrada`);
        }
        this.subscriptions.splice(index, 1);
        console.log(`Assinatura com ID ${id} deletada`);
    }
}
