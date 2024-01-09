/*
  Warnings:

  - Changed the type of `type` on the `RemarkBodyHistory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "RemarkType" AS ENUM ('AGREE', 'DISAGREE', 'NEUTRAL', 'QUESTION', 'DERIVATIVE_THEME', 'SUPPLEMENT', 'SUMMARY', 'PROPOSAL', 'NEW_OPINION', 'IMPRESSION');

-- AlterTable
ALTER TABLE "RemarkBodyHistory" DROP COLUMN "type",
ADD COLUMN     "type" "RemarkType" NOT NULL;
