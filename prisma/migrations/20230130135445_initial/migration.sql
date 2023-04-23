-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Handhistory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "comment" TEXT,
    "updateAt" DATETIME NOT NULL,
    "userid" INTEGER NOT NULL,
    "tag1" TEXT,
    "tag2" TEXT,
    "tag3" TEXT,
    CONSTRAINT "Handhistory_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Handhistory" ("comment", "id", "name", "tag1", "tag2", "tag3", "updateAt", "userid") SELECT "comment", "id", "name", "tag1", "tag2", "tag3", "updateAt", "userid" FROM "Handhistory";
DROP TABLE "Handhistory";
ALTER TABLE "new_Handhistory" RENAME TO "Handhistory";
CREATE TABLE "new_Historysetting" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "players" TEXT NOT NULL,
    "game" TEXT NOT NULL,
    "sblind" TEXT NOT NULL,
    "bblind" TEXT NOT NULL,
    "uni" TEXT NOT NULL,
    "effectivestack" TEXT NOT NULL,
    "anteplayer" TEXT,
    "anteamount" TEXT,
    "stradler" TEXT,
    "handid" INTEGER NOT NULL,
    CONSTRAINT "Historysetting_handid_fkey" FOREIGN KEY ("handid") REFERENCES "Handhistory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Historysetting" ("anteamount", "anteplayer", "bblind", "effectivestack", "game", "handid", "id", "players", "sblind", "stradler", "uni") SELECT "anteamount", "anteplayer", "bblind", "effectivestack", "game", "handid", "id", "players", "sblind", "stradler", "uni" FROM "Historysetting";
DROP TABLE "Historysetting";
ALTER TABLE "new_Historysetting" RENAME TO "Historysetting";
CREATE TABLE "new_Historyflop" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
CREATE TABLE "new_Historyturn" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
CREATE TABLE "new_Historypreflop" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
CREATE TABLE "new_Historyboard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "card1" TEXT,
    "card2" TEXT,
    "card3" TEXT,
    "card4" TEXT,
    "card5" TEXT,
    "handid" INTEGER NOT NULL,
    CONSTRAINT "Historyboard_handid_fkey" FOREIGN KEY ("handid") REFERENCES "Handhistory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Historyboard" ("card1", "card2", "card3", "card4", "card5", "handid", "id") SELECT "card1", "card2", "card3", "card4", "card5", "handid", "id" FROM "Historyboard";
DROP TABLE "Historyboard";
ALTER TABLE "new_Historyboard" RENAME TO "Historyboard";
CREATE TABLE "new_Historyplayer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "position" TEXT NOT NULL,
    "name" TEXT,
    "card1" TEXT,
    "card2" TEXT,
    "stack" TEXT NOT NULL,
    "handid" INTEGER NOT NULL,
    CONSTRAINT "Historyplayer_handid_fkey" FOREIGN KEY ("handid") REFERENCES "Handhistory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Historyplayer" ("card1", "card2", "handid", "id", "name", "position", "stack") SELECT "card1", "card2", "handid", "id", "name", "position", "stack" FROM "Historyplayer";
DROP TABLE "Historyplayer";
ALTER TABLE "new_Historyplayer" RENAME TO "Historyplayer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
