import { SubscriptionDTO, SubscriptionStatus } from "../SubscriptionDTO";
import { SubscriptionRepository } from "./SubscriptionRepository";

export class SubscriptionRepositoryImpl implements SubscriptionRepository {
    private subscriptions: SubscriptionDTO[] = [
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

    save(subscription: SubscriptionDTO): void {
        this.subscriptions.push(subscription);
        console.log("Assinatura salva:", subscription);
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
