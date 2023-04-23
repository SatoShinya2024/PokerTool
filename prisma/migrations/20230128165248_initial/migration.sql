/*
  Warnings:

  - You are about to drop the column `bblindt` on the `historysetting` table. All the data in the column will be lost.
  - Added the required column `bblind` to the `historysetting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uni` to the `historysetting` table without a default value. This is not possible if the table is not empty.

*/
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
    "bblind" TEXT NOT NULL,
    "uni" TEXT NOT NULL
);
INSERT INTO "new_historysetting" ("anteamount", "anteplayer", "effectivestack", "game", "handid", "players", "sblind", "stradler") SELECT "anteamount", "anteplayer", "effectivestack", "game", "handid", "players", "sblind", "stradler" FROM "historysetting";
DROP TABLE "historysetting";
ALTER TABLE "new_historysetting" RENAME TO "historysetting";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
