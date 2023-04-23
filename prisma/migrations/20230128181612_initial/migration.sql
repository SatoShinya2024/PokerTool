/*
  Warnings:

  - You are about to drop the `handhistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `historyboard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `historyflop` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `historyplayer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `historypreflop` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `historyriver` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `historysetting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `historyturn` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "handhistory";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "historyboard";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "historyflop";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "historyplayer";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "historypreflop";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "historyriver";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "historysetting";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "historyturn";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Handhistory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "comment" TEXT,
    "updateAt" DATETIME NOT NULL,
    "userid" INTEGER NOT NULL,
    CONSTRAINT "Handhistory_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Historysetting" (
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
    CONSTRAINT "Historysetting_handid_fkey" FOREIGN KEY ("handid") REFERENCES "Handhistory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Historyplayer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "position" TEXT NOT NULL,
    "name" TEXT,
    "card1" TEXT,
    "card2" TEXT,
    "stack" TEXT NOT NULL,
    "handid" INTEGER NOT NULL,
    CONSTRAINT "Historyplayer_handid_fkey" FOREIGN KEY ("handid") REFERENCES "Handhistory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Historyboard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "card1" TEXT,
    "card2" TEXT,
    "card3" TEXT,
    "card4" TEXT,
    "card5" TEXT,
    "handid" INTEGER NOT NULL,
    CONSTRAINT "Historyboard_handid_fkey" FOREIGN KEY ("handid") REFERENCES "Handhistory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Historypreflop" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "num" INTEGER NOT NULL,
    "position" TEXT,
    "action" TEXT,
    "chip" TEXT,
    "handid" INTEGER NOT NULL,
    CONSTRAINT "Historypreflop_handid_fkey" FOREIGN KEY ("handid") REFERENCES "Handhistory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Historyflop" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "num" INTEGER NOT NULL,
    "position" TEXT,
    "action" TEXT,
    "chip" TEXT,
    "handid" INTEGER NOT NULL,
    CONSTRAINT "Historyflop_handid_fkey" FOREIGN KEY ("handid") REFERENCES "Handhistory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Historyturn" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "num" INTEGER NOT NULL,
    "position" TEXT,
    "action" TEXT,
    "chip" TEXT,
    "handid" INTEGER NOT NULL,
    CONSTRAINT "Historyturn_handid_fkey" FOREIGN KEY ("handid") REFERENCES "Handhistory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Historyriver" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "num" INTEGER NOT NULL,
    "position" TEXT,
    "action" TEXT,
    "chip" TEXT,
    "handid" INTEGER NOT NULL,
    CONSTRAINT "Historyriver_handid_fkey" FOREIGN KEY ("handid") REFERENCES "Handhistory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
