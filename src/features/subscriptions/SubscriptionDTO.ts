import { SubscriptionStatus } from "@/enums/SubscriptionStatus";

export interface SubscriptionInputDTO {
    plan_id: string;
    customer_email: string;
    status?: SubscriptionStatus;
    next_billing_date?: Date
}

export interface SubscriptionOutputDTO {
    id: string
    plan_id: string;
    customer_email: string;
    status: SubscriptionStatus;
    next_billing_date: Date
}

export interface SubscriptionUpdateDTO {
    id: string,
    customer_email?: string;
    status?: SubscriptionStatus;
}