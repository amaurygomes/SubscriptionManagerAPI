import { PlanDTO } from "../planDTO";
import { CreatePlanUseCase } from "../useCases/CreatePlanUseCase";
import { DeletePlansUseCase } from "../useCases/DeletePlanUseCase";
import { ListPlansUseCase } from "../useCases/ListPlansUseCase";

export class PlanController {
  constructor(
    private createPlanUseCase: CreatePlanUseCase,
    private listPlansUseCase: ListPlansUseCase,
    private deletePlanUseCase: DeletePlansUseCase
  ) {}

  async getPlans() {
    return await this.listPlansUseCase.execute();
  }

  async createPlan(data: PlanDTO) {
    return await this.createPlanUseCase.execute(data); 
  }

  async deletePlan(id: string) {
    return await this.deletePlanUseCase.execute(id); 
  }

}