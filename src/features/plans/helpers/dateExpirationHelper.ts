import { Billing_Cycle } from "../planDTO";

export function calculateExpirationDate(plan: Billing_Cycle): Date {
    const hoje = new Date();
    
    if (plan === "monthly") {
      hoje.setMonth(hoje.getMonth() + 1);
    } else if (plan === "annual") {
      hoje.setFullYear(hoje.getFullYear() + 1);
    }
  
    return hoje;
  }
  