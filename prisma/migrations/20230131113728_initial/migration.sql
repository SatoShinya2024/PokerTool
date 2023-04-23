/*
  Warnings:

  - Added the required column `street` to the `Historyturn` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Historyflop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Historyriver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Historypreflop` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Historyturn" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "street" TEXT NOT NULL,
    "num" INTEGER NOT NULL,
    "position" TEXT,
    "action" TEXT,
    "chip" TEXT,
    "handid" INTEGER NOT NULL,
    CONSTRAINT "Historyturn_handid_fkey" FOREIGN KEY ("handid") REFERENCES "Handhistory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Historyturn" ("action", "chip", "handid", "id", "num", "position") SELECT "action", "chip", "handid", "id", "num", "position" FROM "Historyturn";
DROP TABLE "Historyturn";
ALTER TABLE "new_Historyturn" RENAME TO "Historyturn";
CREATE TABLE "new_Historyflop" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "street" TEXT NOT NULL,
    "num" INTEGER NOT NULL,
    "position" TEXT,
    "action" TEXT,
    "chip" TEXT,
    "handid" INTEGER NOT NULL,
    CONSTRAINT "Historyflop_handid_fkey" FOREIGN KEY ("handid") REFERENCES "Handhistory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Historyflop" ("action", "chip", "handid", "id", "num", "position") SELECT "action", "chip", "handid", "id", "num", "position" FROM "Historyflop";
DROP TABLE "Historyflop";
ALTER TABLE "new_Historyflop" RENAME TO "Historyflop";
CREATE TABLE "new_Historyriver" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "street" TEXT NOT NULL,
    "num" INTEGER NOT NULL,
    "position" TEXT,
    "action" TEXT,
    "chip" TEXT,
    "handid" INTEGER NOT NULL,
    CONSTRAINT "Historyriver_handid_fkey" FOREIGN KEY ("handid") REFERENCES "Handhistory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Historyriver" ("action", "chip", "handid", "id", "num", "position") SELECT "action", "chip", "handid", "id", "num", "position" FROM "Historyriver";
DROP TABLE "Historyriver";
ALTER TABLE "new_Historyriver" RENAME TO "Historyriver";
CREATE TABLE "new_Historypreflop" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "street" TEXT NOT NULL,
    "num" INTEGER NOT NULL,
    "position" TEXT,
    "action" TEXT,
    "chip" TEXT,
    "handid" INTEGER NOT NULL,
    CONSTRAINT "Historypreflop_handid_fkey" FOREIGN KEY ("handid") REFERENCES "Handhistory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Historypreflop" ("action", "chip", "handid", "id", "num", "position") SELECT "action", "chip", "handid", "id", "num", "position" FROM "Historypreflop";
DROP TABLE "Historypreflop";
ALTER TABLE "new_Historypreflop" RENAME TO "Historypreflop";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
