import { v4 as uuidv4 } from "uuid";

export function generateIdWithPrefix(prefix: string): string {
    const uuid = uuidv4();
    return `${prefix}_${uuid}`;
}
