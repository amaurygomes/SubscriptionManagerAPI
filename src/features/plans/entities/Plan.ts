import { v4 as uuidv4 } from "uuid";
import { Billing_Cycle } from "../planDTO";


export class Plan {
    private readonly _id: string;
    private _name: string;
    private _price: number;
    private _billing_cycle: Billing_Cycle;

    constructor(name: string, price: number, billing_cycle: Billing_Cycle) {
        this._id = uuidv4();
        this._name = name;
        this._price = price;
        this._billing_cycle = billing_cycle;
    }

    // Getters
    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }

    get billing_cycle(): Billing_Cycle {
        return this._billing_cycle ;
    }

    // Setters
    set name(name: string) {
        this._name = name;
    }

    set price(price: number) {
        if (price < 0) {
            throw new Error("Price must be a positive number.");
        }
        this._price = price;
    }

    set billing_cycle(billing_cycle: Billing_Cycle) {
        this._billing_cycle = billing_cycle;
    }
}
