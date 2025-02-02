import { PlanDTO } from "../planDTO";
import { PlanRepository } from "../repositories/PlanRepository";

export class ListPlansUseCase {
    constructor(private planRepository: PlanRepository) {}

    execute(): PlanDTO[] {
        const plans = this.planRepository.findAll();

        if (plans.length === 0) {
            console.log("No plans found.");
        }

        return plans;
    }
}
