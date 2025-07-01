-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "plan" TEXT NOT NULL,
    "mealTypes" TEXT NOT NULL,
    "deliveryDays" TEXT NOT NULL,
    "allergies" TEXT,
    "totalPrice" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
