import { PlanDTO, PlanOutputDTO } from "../planDTO";


export interface PlanRepository {

    save(plan: PlanDTO): Promise<void>;
    findAll(): Promise<PlanDTO[]>;
    findById(id: string): Promise<PlanOutputDTO>;
    deleteById(id: string): Promise<void>;


}