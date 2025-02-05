import { Billing_Cycle } from "../SubscriptionDTO";

export function calculateExpirationDate(billing_cycle: Billing_Cycle): Date {
  const todayDate = new Date();

  if (billing_cycle === "monthly") {
    todayDate.setMonth(todayDate.getMonth() + 1);
  } else if (billing_cycle === "annual") {
    todayDate.setFullYear(todayDate.getFullYear() + 1);
  } else {
    throw new Error("Plano de assinatura inválido");
  }

  return todayDate;
}
