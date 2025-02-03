-- CreateTable
CREATE TABLE "plans" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "billing_cycle" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "subscriptions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "plan_id" TEXT NOT NULL,
    "customer_email" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "next_billing_date" DATETIME NOT NULL,
    CONSTRAINT "subscriptions_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "plans" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
