-- CreateTable
CREATE TABLE "Historylistcontente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "listid" INTEGER NOT NULL,
    "handid" INTEGER NOT NULL,
    CONSTRAINT "Historylistcontente_handid_fkey" FOREIGN KEY ("handid") REFERENCES "Handhistory" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Historylistcontente_listid_fkey" FOREIGN KEY ("listid") REFERENCES "Historylist" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
