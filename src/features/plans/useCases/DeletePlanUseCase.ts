import { PlanRepository } from "../repositories/PlanRepository";

export class DeletePlansUseCase {
    constructor(private planRepository: PlanRepository) {}

    execute(id: string): void {
        const plans = this.planRepository.findAll();

        const plan = plans.some(plan => plan.id === id);

        if (!plan) {
            throw new Error(`Plan with ID ${id} not found`);
        }

        this.planRepository.deleteById(id);
        console.log(`Plan with ID ${id} deleted successfully.`);
    }
}
