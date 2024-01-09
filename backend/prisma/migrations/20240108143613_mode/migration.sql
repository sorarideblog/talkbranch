/*
  Warnings:

  - Changed the type of `mode` on the `TalkTheme` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TalkThemeMode" AS ENUM ('PUBLIC', 'FACILITATED');

-- AlterTable
ALTER TABLE "TalkTheme" DROP COLUMN "mode",
ADD COLUMN     "mode" "TalkThemeMode" NOT NULL;
