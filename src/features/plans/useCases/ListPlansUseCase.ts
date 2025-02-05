import { CustomError } from "@/errors/CustomError";
import { PlanDTO } from "../PlanDTO";
import { PlanRepository } from "../repositories/PlanRepository";
import { ERROR_MESSAGES } from "@/messages/PlanMessage";

export class ListPlansUseCase {
    constructor(private planRepository: PlanRepository) { }

    async execute(): Promise<PlanDTO[]> {

        const plans = await this.planRepository.findAll();

        if (plans.length === 0) {
            throw new CustomError(404, ERROR_MESSAGES.planNotFound);
        }

        return plans;
    }
}
