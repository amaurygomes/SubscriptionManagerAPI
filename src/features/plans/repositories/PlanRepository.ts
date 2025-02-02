import { PlanDTO } from "../planDTO";


export interface PlanRepository {

    findAll(): PlanDTO[];
    save(plan: PlanDTO): void;
    deleteById(id: string): void;

}