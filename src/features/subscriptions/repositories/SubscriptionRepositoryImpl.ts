import { SubscriptionRepository } from "./SubscriptionRepository";
import { SubscriptionInputDTO } from "../SubscriptionDTO";

import { PrismaClient } from '@prisma/client'
import { Subscription } from "../entities/Subscription";

const prisma = new PrismaClient()

export class SubscriptionRepositoryImpl implements SubscriptionRepository {

    async save(subscription: SubscriptionInputDTO): Promise<void> {

        const newSubscription = new Subscription(subscription.plan_id, subscription.customer_email)
        console.log(newSubscription)

        await prisma.subscription.create({
            data: {
                id: newSubscription.id,
                plan_id: newSubscription.plan_id,
                customer_email: newSubscription.customer_email,
                status: newSubscription.status,
                next_billing_date: newSubscription.next_billing_date
            }
        })
    }

    deleteById(id: string): void {

    }
}
