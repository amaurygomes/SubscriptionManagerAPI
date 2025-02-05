import { PlanInputDTO, PlanOutputDTO } from "../PlanDTO";




export interface PlanRepository {

    save(plan: PlanInputDTO): Promise<void>;
    findAll(): Promise<PlanInputDTO[]>;
    findById(id: string): Promise<PlanOutputDTO | null>;
    findByName(name: string): Promise<PlanOutputDTO | null>;
    deleteById(id: string): Promise<void>;


}