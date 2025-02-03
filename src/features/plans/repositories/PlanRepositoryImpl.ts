import { Plan } from "../entities/Plan";
import { Billing_Cycle, PlanDTO, PlanOutputDTO } from "../planDTO";
import { PlanRepository } from "./PlanRepository";

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class PlanRepositoryImpl implements PlanRepository {

    async findAll(): Promise<PlanOutputDTO[]> {
        const plans = await prisma.plan.findMany();

        return plans.map(plan => ({
            id: plan.id,
            name: plan.name,
            price: plan.price,
            billing_cycle: plan.billing_cycle as Billing_Cycle
        }));
    }

    async save(planData: PlanDTO): Promise<void> {
        const newPlan = new Plan(planData.name, planData.price, planData.billing_cycle)
        await prisma.plan.create(
            {
                data: {
                    id: newPlan.id,
                    name: newPlan.name,
                    price: newPlan.price,
                    billing_cycle: newPlan.billing_cycle
                }
            }
        )
        return
    }

    async deleteById(id: string): Promise<void> {

        await prisma.plan.delete(
            {
                where: {
                    id: id
                }
            }
        )

    }

}