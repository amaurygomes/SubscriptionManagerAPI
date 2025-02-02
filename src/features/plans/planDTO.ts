
export enum Billing_Cycle {
    MONTHLY = "monthly",
    YEARLY = "yearly"
}


export interface PlanDTO {
    id?: string;
    name: string;
    price: number;
    billing_cycle: Billing_Cycle;
}
