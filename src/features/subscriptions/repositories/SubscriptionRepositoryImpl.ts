import { SubscriptionRepository } from "./SubscriptionRepository";
import { SubscriptionInputDTO, SubscriptionOutputDTO, SubscriptionUpdateDTO } from "../SubscriptionDTO";
import { Subscription } from "../entities/Subscription";
import { getBillingCycleType } from "@/helpers/getBillingCycleTypeHelper";
import { SubscriptionStatus } from "@/enums/SubscriptionStatus";

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class SubscriptionRepositoryImpl implements SubscriptionRepository {

    async save(subscription: SubscriptionInputDTO): Promise<void> {

        const newSubscription = new Subscription(
            subscription.plan_id,
            subscription.customer_email,
            subscription.status
        )

        const newDate = getBillingCycleType(subscription.plan_id)
        console.log(newDate)

        await prisma.subscription.create({
            data: {
                id: newSubscription.id,
                plan_id: newSubscription.plan_id,
                customer_email: newSubscription.customer_email,
                status: newSubscription.status as string,
                next_billing_date: newSubscription.next_billing_date
            }
        })
    }

    async findById(id: string): Promise<SubscriptionOutputDTO> {
        const subscription = await prisma.subscription.findUnique({
            where: {
                id: id
            }

        }
        )
        return subscription as SubscriptionOutputDTO
    }

    async update(subscription: SubscriptionUpdateDTO): Promise<void> {
        const { id, status, ...data } = subscription;

        if (status && !Object.values(SubscriptionStatus).includes(status as SubscriptionStatus)) {
            throw new Error(`Invalid status: ${status}`);
        }

        await prisma.subscription.update({
            where: { id },
            data: { ...data, status }
        });
    }

    deleteById(id: string): void {

    }
}
