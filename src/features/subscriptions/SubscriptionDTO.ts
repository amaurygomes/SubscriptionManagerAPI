import { SubscriptionStatus } from "@/enums/SubscriptionStatus";

export interface SubscriptionInputDTO {
    plan_id: string;
    customer_email: string;
    status?: SubscriptionStatus;
}
