import { PlanDTO } from "../planDTO";
import { PlanRepository } from "../repositories/PlanRepository";

export class CreatePlanUseCase {
    constructor(private planRepository: PlanRepository) { }

    async execute(planData: PlanDTO): Promise<void> {

        await this.planRepository.save(planData);

    }
}
