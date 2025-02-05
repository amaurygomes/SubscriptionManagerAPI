import { CustomError } from "@/messages/errors/CustomError";
import { PlanRepository } from "@/features/plans/repositories/PlanRepository";
import { ERROR_MESSAGES } from "@/messages/PlanMessage";
import { PlanInputDTO } from "../PlanDTO";


export class CreatePlanUseCase {
    constructor(private planRepository: PlanRepository) { }

    async execute(planData: PlanInputDTO): Promise<void> {

        const existingPlan = await this.planRepository.findByName(planData.name);

        if (existingPlan) {
            throw new CustomError(409, ERROR_MESSAGES.planAlreadyExists(planData.name))
        }

        await this.planRepository.save(planData);
    }
}
