import { Plan } from "../entities/Plan";
import { Billing_Cycle } from "@/enums/BillingCycle";
import { PlanDTO, PlanOutputDTO } from "../PlanDTO";
import { PlanRepository } from "./PlanRepository";

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class PlanRepositoryImpl implements PlanRepository {

    async save(planData: PlanDTO): Promise<void> {
        const newPlan = new Plan(planData.name, planData.price, planData.isActive, planData.billing_cycle)
        await prisma.plan.create(
            {
                data: {
                    id: newPlan.id,
                    name: newPlan.name,
                    price: newPlan.price,
                    isActive: newPlan.isActive,
                    billing_cycle: newPlan.billing_cycle
                }
            }
        )
        return
    }

    async findById(id: string): Promise<PlanOutputDTO | null> {
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
                isActive: plan.isActive,
                billing_cycle: plan.billing_cycle as Billing_Cycle,
            };

            return planOut;
        }

        return null
    }

    async findByName(name: string): Promise<PlanOutputDTO | null> {
        const plan = await prisma.plan.findUnique({
            where: {
                name: name
            }
        });

        if (plan) {
            const planOut: PlanOutputDTO = {
                id: plan.id,
                name: plan.name,
                price: plan.price,
                isActive: plan.isActive,
                billing_cycle: plan.billing_cycle as Billing_Cycle,
            };

            return planOut;
        }

        return null
    }



    async findAll(): Promise<PlanOutputDTO[]> {
        const plans = await prisma.plan.findMany();

        return plans.map(plan => ({
            id: plan.id,
            name: plan.name,
            price: plan.price,
            isActive: plan.isActive,
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