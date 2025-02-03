import { PlanRepository } from "../repositories/PlanRepository";

export class DeletePlansUseCase {
    constructor(private planRepository: PlanRepository) { }

    execute(id: string): void {
        const plans = this.planRepository.findAll();
        throw new Error("Method not implemented")
    }
}
