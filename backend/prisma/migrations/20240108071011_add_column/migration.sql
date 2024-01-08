/*
  Warnings:

  - Added the required column `allowRemarkEdit` to the `TalkTheme` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TalkTheme" ADD COLUMN     "allowRemarkEdit" BOOLEAN NOT NULL;
