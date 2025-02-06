import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function getBillingCycleType(plan_id: string): Promise<string | null> {
    const plan = await prisma.plan.findUnique({
        where: { id: plan_id },
        select: { billing_cycle: true }
    });

    return plan?.billing_cycle || null;
}