import { CustomError } from "@/messages/errors/CustomError";
import { ERROR_MESSAGES } from "@/messages/PlanMessage";
import { PlanRepository } from "../repositories/PlanRepository";


export class DeletePlansUseCase {
    constructor(private planRepository: PlanRepository) { }

    async execute(id: string): Promise<void> {

        const plan = await this.planRepository.findById(id)

        if (!plan) {
            throw new CustomError(404, ERROR_MESSAGES.planNotFound)
        }

        this.planRepository.deleteById(id)

    }
}
