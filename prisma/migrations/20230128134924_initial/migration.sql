-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_historysetting" (
    "handid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "players" TEXT NOT NULL,
    "game" TEXT NOT NULL,
    "effectivestack" TEXT NOT NULL,
    "anteplayer" TEXT,
    "anteamount" TEXT,
    "stradler" TEXT
);
INSERT INTO "new_historysetting" ("anteamount", "anteplayer", "effectivestack", "game", "handid", "players", "stradler") SELECT "anteamount", "anteplayer", "effectivestack", "game", "handid", "players", "stradler" FROM "historysetting";
DROP TABLE "historysetting";
ALTER TABLE "new_historysetting" RENAME TO "historysetting";
CREATE TABLE "new_handhistory" (
    "handid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "comment" TEXT,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_handhistory" ("comment", "handid", "name", "updateAt", "userid") SELECT "comment", "handid", "name", "updateAt", "userid" FROM "handhistory";
DROP TABLE "handhistory";
ALTER TABLE "new_handhistory" RENAME TO "handhistory";
CREATE TABLE "new_historyflop" (
    "handid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "num" INTEGER NOT NULL,
    "position" TEXT,
    "action" TEXT,
    "chip" TEXT
);
INSERT INTO "new_historyflop" ("action", "chip", "handid", "num", "position") SELECT "action", "chip", "handid", "num", "position" FROM "historyflop";
DROP TABLE "historyflop";
ALTER TABLE "new_historyflop" RENAME TO "historyflop";
CREATE TABLE "new_historyplayer" (
    "handid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "position" TEXT NOT NULL,
    "name" TEXT,
    "card1" TEXT,
    "card2" TEXT,
    "stack" TEXT NOT NULL
);
INSERT INTO "new_historyplayer" ("card1", "card2", "handid", "name", "position", "stack") SELECT "card1", "card2", "handid", "name", "position", "stack" FROM "historyplayer";
DROP TABLE "historyplayer";
ALTER TABLE "new_historyplayer" RENAME TO "historyplayer";
CREATE TABLE "new_historypreflop" (
    "handid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "num" INTEGER NOT NULL,
    "position" TEXT,
    "action" TEXT,
    "chip" TEXT
);
INSERT INTO "new_historypreflop" ("action", "chip", "handid", "num", "position") SELECT "action", "chip", "handid", "num", "position" FROM "historypreflop";
DROP TABLE "historypreflop";
ALTER TABLE "new_historypreflop" RENAME TO "historypreflop";
CREATE TABLE "new_historyturn" (
    "handid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "num" INTEGER NOT NULL,
    "position" TEXT,
    "action" TEXT,
    "chip" TEXT
);
INSERT INTO "new_historyturn" ("action", "chip", "handid", "num", "position") SELECT "action", "chip", "handid", "num", "position" FROM "historyturn";
DROP TABLE "historyturn";
ALTER TABLE "new_historyturn" RENAME TO "historyturn";
CREATE TABLE "new_historyriver" (
    "handid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "num" INTEGER NOT NULL,
    "position" TEXT,
    "action" TEXT,
    "chip" TEXT
);
INSERT INTO "new_historyriver" ("action", "chip", "handid", "num", "position") SELECT "action", "chip", "handid", "num", "position" FROM "historyriver";
DROP TABLE "historyriver";
ALTER TABLE "new_historyriver" RENAME TO "historyriver";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
