import { PlanDTO } from "../planDTO";
import { PlanRepository } from "../repositories/PlanRepository";

export class CreatePlanUseCase {
    constructor(private planRepository: PlanRepository) { }

    execute(planData: PlanDTO): PlanDTO {

        this.planRepository.save(planData);

        return {
            name: planData.name,
            price: planData.price,
            billing_cycle: planData.billing_cycle
        };
    }
}
