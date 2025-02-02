import { PlanController } from "./controllers/PlanController";
import { PlanRepositoryImpl } from "./repositories/PlanRepositoryImpl";
import { CreatePlanUseCase } from "./useCases/CreatePlanUseCase";
import { DeletePlansUseCase } from "./useCases/DeletePlanUseCase";
import { ListPlansUseCase } from "./useCases/ListPlansUseCase";


const planRepository = new PlanRepositoryImpl();
const listPlansUseCase = new ListPlansUseCase(planRepository);
const createPlanUseCase = new CreatePlanUseCase(planRepository);
const deletePlansUseCase = new DeletePlansUseCase(planRepository);

const planModule = new PlanController(createPlanUseCase, listPlansUseCase, deletePlansUseCase);

export { planModule };
