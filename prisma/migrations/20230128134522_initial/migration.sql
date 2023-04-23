-- CreateTable
CREATE TABLE "handhistory" (
    "handid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "updateAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "historysetting" (
    "handid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "players" TEXT NOT NULL,
    "game" TEXT NOT NULL,
    "effectivestack" TEXT NOT NULL,
    "anteplayer" TEXT NOT NULL,
    "anteamount" TEXT NOT NULL,
    "stradler" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "historyplayer" (
    "handid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "position" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "card1" TEXT NOT NULL,
    "card2" TEXT NOT NULL,
    "stack" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "historypreflop" (
    "handid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "num" INTEGER NOT NULL,
    "position" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "chip" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "historyflop" (
    "handid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "num" INTEGER NOT NULL,
    "position" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "chip" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "historyturn" (
    "handid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "num" INTEGER NOT NULL,
    "position" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "chip" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "historyriver" (
    "handid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "num" INTEGER NOT NULL,
    "position" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "chip" TEXT NOT NULL
);
