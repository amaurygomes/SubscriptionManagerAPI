import { PlanDTO } from "../planDTO";
import { PlanRepository } from "../repositories/PlanRepository";

export class ListPlansUseCase {
    constructor(private planRepository: PlanRepository) { }

    async execute(): Promise<PlanDTO[]> {

        const plans = await this.planRepository.findAll();

        if (plans.length === 0) {
            throw new Error("No plan found");
        }

        return plans;
    }
}
