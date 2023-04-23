-- CreateTable
CREATE TABLE "Historylist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "updateAt" DATETIME NOT NULL,
    CONSTRAINT "Historylist_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
