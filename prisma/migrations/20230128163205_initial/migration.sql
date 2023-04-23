/*
  Warnings:

  - Added the required column `bblindt` to the `historysetting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sblind` to the `historysetting` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "historyboard" (
    "handid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "card1" TEXT,
    "card2" TEXT,
    "card3" TEXT,
    "card4" TEXT,
    "card5" TEXT
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_historysetting" (
    "handid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "players" TEXT NOT NULL,
    "game" TEXT NOT NULL,
    "effectivestack" TEXT NOT NULL,
    "anteplayer" TEXT,
    "anteamount" TEXT,
    "stradler" TEXT,
    "sblind" TEXT NOT NULL,
    "bblindt" TEXT NOT NULL
);
INSERT INTO "new_historysetting" ("anteamount", "anteplayer", "effectivestack", "game", "handid", "players", "stradler") SELECT "anteamount", "anteplayer", "effectivestack", "game", "handid", "players", "stradler" FROM "historysetting";
DROP TABLE "historysetting";
ALTER TABLE "new_historysetting" RENAME TO "historysetting";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
