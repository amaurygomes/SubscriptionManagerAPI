export enum SubscriptionStatus {
    PENDING = "pending",
    ACTIVE = "active",
    CANCELED = "canceled",
    SUSPENDED = "suspended"
}
export interface SubscriptionDTO {
    plan_id: string;
    customer_email: string;
    status: SubscriptionStatus;
    next_billing_date: Date;
}
