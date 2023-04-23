-- CreateTable
CREATE TABLE "Historytag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tag1" TEXT,
    "tag2" TEXT,
    "tag3" TEXT,
    "handid" INTEGER NOT NULL,
    CONSTRAINT "Historytag_handid_fkey" FOREIGN KEY ("handid") REFERENCES "Handhistory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
