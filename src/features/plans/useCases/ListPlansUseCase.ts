import { CustomError } from "@/messages/errors/CustomError";
import { ERROR_MESSAGES } from "@/messages/PlanMessage";
import { PlanRepository } from "../repositories/PlanRepository";
import { PlanInputDTO } from "../PlanDTO";


export class ListPlansUseCase {
    constructor(private planRepository: PlanRepository) { }

    async execute(): Promise<PlanInputDTO[]> {

        const plans = await this.planRepository.findAll();

        if (plans.length === 0) {
            throw new CustomError(404, ERROR_MESSAGES.planNotFound);
        }

        return plans;
    }
}
