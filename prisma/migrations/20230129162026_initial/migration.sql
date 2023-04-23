/*
  Warnings:

  - You are about to drop the `Historytag` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Handhistory" ADD COLUMN "tag1" TEXT;
ALTER TABLE "Handhistory" ADD COLUMN "tag2" TEXT;
ALTER TABLE "Handhistory" ADD COLUMN "tag3" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Historytag";
PRAGMA foreign_keys=on;
