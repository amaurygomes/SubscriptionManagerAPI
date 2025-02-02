import { v4 as uuidv4 } from "uuid";
import { SubscriptionStatus } from "../subscriptionDTO";


export class Subscription {
    private _id: string;
    private _plan_id: string;
    private _customer_email: string;
    private _status: SubscriptionStatus;
    private _next_billing_date: Date;

    constructor(plan_id: string, customer_email: string, status: SubscriptionStatus = SubscriptionStatus.PENDING, next_billing_date: Date) {
        this._id = uuidv4();
        this._plan_id = plan_id;
        this._customer_email = customer_email;
        this._status = status;
        this._next_billing_date = next_billing_date;
    }

    get id(): string {
        return this._id;
    }

    get plan_id(): string {
        return this._plan_id;
    }

    set plan_id(plan_id: string) {
        this._plan_id = plan_id;
    }

    get customer_email(): string {
        return this._customer_email;
    }

    set customer_email(email: string) {
        this._customer_email = email;
    }

    get status(): SubscriptionStatus {
        return this._status;
    }

    set status(status: SubscriptionStatus) {
        this._status = status;
    }

    get next_billing_date(): Date {
        return this._next_billing_date;
    }

    set next_billing_date(date: Date) {
        this._next_billing_date = date;
    }
}
