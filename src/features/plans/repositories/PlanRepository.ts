import { PlanDTO } from "../planDTO";


export interface PlanRepository {

    findAll(): Promise<PlanDTO[]>;
    save(plan: PlanDTO): Promise<void>;
    deleteById(id: string): Promise<void>;

}