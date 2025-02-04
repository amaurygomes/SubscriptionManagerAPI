
import { PlanRepository } from "../repositories/PlanRepository";

export class DeletePlansUseCase {
    constructor(private planRepository: PlanRepository) { }

    async execute(id: string): Promise<{ status: number, message: string }> {

        const plan = await this.planRepository.findById(id)

        if (plan) {
            this.planRepository.deleteById(id)
        }

        return {
            status: 200,
            message: "Plan deleted"
        }



    }
}
