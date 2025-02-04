import { Plan } from "../entities/Plan";
import { Billing_Cycle, PlanDTO, PlanOutputDTO } from "../planDTO";
import { PlanRepository } from "./PlanRepository";

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class PlanRepositoryImpl implements PlanRepository {

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

    async findById(id: string): Promise<PlanOutputDTO> {
        const plan = await prisma.plan.findUnique({
            where: {
                id: id
            }
        });

        if (plan) {
            const planOut: PlanOutputDTO = {
                id: plan.id,
                name: plan.name,
                price: plan.price,
                billing_cycle: plan.billing_cycle as Billing_Cycle,
            };

            return planOut;
        }

        throw new Error(`The plan with the given (${id}) does not exist`);

    }



    async findAll(): Promise<PlanOutputDTO[]> {
        const plans = await prisma.plan.findMany();

        return plans.map(plan => ({
            id: plan.id,
            name: plan.name,
            price: plan.price,
            billing_cycle: plan.billing_cycle as Billing_Cycle
        }));
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