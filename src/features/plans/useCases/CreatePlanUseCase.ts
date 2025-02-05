import { CustomError } from "@/errors/CustomError";
import { PlanDTO } from "../PlanDTO";
import { PlanRepository } from "../repositories/PlanRepository";
import { ERROR_MESSAGES } from "@/messages/PlanMessage";

export class CreatePlanUseCase {
    constructor(private planRepository: PlanRepository) { }

    async execute(planData: PlanDTO): Promise<void> {

        const existingPlan = await this.planRepository.findByName(planData.name);

        if (existingPlan) {
            throw new CustomError(409, ERROR_MESSAGES.planAlreadyExists(planData.name))
        }

        await this.planRepository.save(planData);
    }
}
