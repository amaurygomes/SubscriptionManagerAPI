import { DeletePlansUseCase } from "../useCases/DeletePlanUseCase";
import { ListPlansUseCase } from "../useCases/ListPlansUseCase";
import { SUCCESS_MESSAGES } from "@/messages/PlanMessage";
import { CreatePlanUseCase } from "../useCases/CreatePlanUseCase";
import { PlanInputDTO } from "../PlanDTO";


export class PlanController {
  constructor(
    private createPlanUseCase: CreatePlanUseCase,
    private listPlansUseCase: ListPlansUseCase,
    private deletePlanUseCase: DeletePlansUseCase
  ) { }

  async createPlan(data: PlanInputDTO) {
    await this.createPlanUseCase.execute(data);
    return {
      statuscode: 200,
      message: SUCCESS_MESSAGES.planCreated(data.name)
    }
  }

  async getPlans() {
    return await this.listPlansUseCase.execute();
  }

  async deletePlan(id: string) {
    await this.deletePlanUseCase.execute(id);
    return {
      statuscode: 200,
      message: SUCCESS_MESSAGES.planDeleted(id)
    }
  }

}