import { Plan } from "../entities/Plan";
import { Billing_Cycle } from "../planDTO";
import { PlanRepository } from "./PlanRepository";

export class PlanRepositoryImpl implements PlanRepository {
    private plans: Plan[] = [
        new Plan("Basic", 9.99, Billing_Cycle.MONTHLY),
        new Plan("Premium", 19.99, Billing_Cycle.MONTHLY),
        new Plan("Ultimate", 29.99, Billing_Cycle.YEARLY),
    ]

    findAll(): Plan[] {
        return this.plans;
    }

    save(plan: Plan): void {
        this.plans.push(plan);
        console.log (this.plans)
    }

    deleteById(id: string): void {
        const index = this.plans.findIndex((plan) => plan.id === id);
        if (index !== -1) {
            this.plans.splice(index, 1);
        } else {
            throw new Error(`Plan with ID ${id} not found`);
        }
    }

}