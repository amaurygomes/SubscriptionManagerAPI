import { PlanDTO, PlanOutputDTO } from "../PlanDTO";


export interface PlanRepository {

    save(plan: PlanDTO): Promise<void>;
    findAll(): Promise<PlanDTO[]>;
    findById(id: string): Promise<PlanOutputDTO | null>;
    findByName(name: string): Promise<PlanOutputDTO | null>;
    deleteById(id: string): Promise<void>;


}