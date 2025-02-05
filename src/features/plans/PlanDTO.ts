import { Billing_Cycle } from "@/enums/BillingCycle";


export interface PlanInputDTO {
    name: string;
    price: number;
    isActive: boolean;
    billing_cycle: Billing_Cycle;
}

export interface PlanOutputDTO {
    id: string;
    name: string;
    price: number;
    isActive: boolean;
    billing_cycle: Billing_Cycle;
}

