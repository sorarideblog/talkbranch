-- CreateTable
CREATE TABLE "TalkTheme" (
    "id" SERIAL NOT NULL,
    "parentThemeId" INTEGER,
    "title" TEXT NOT NULL,
    "createdByUserId" INTEGER NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "isPublic" BOOLEAN NOT NULL,
    "mode" TEXT NOT NULL,
    "allowRemarkAfterConclusion" BOOLEAN NOT NULL,
    "conslusionRemarkId" INTEGER,
    "concluedeAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "TalkTheme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Remark" (
    "id" SERIAL NOT NULL,
    "themeId" INTEGER NOT NULL,
    "parentId" INTEGER,
    "mergedToId" INTEGER,
    "quotedRemarkId" INTEGER,
    "createdByUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Remark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TalkThemeModerator" (
    "themeId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TalkThemeModerator_pkey" PRIMARY KEY ("themeId","userId")
);

-- CreateTable
CREATE TABLE "RemarkBodyHistory" (
    "remarkId" INTEGER NOT NULL,
    "version" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RemarkBodyHistory_pkey" PRIMARY KEY ("remarkId","version")
);

-- CreateTable
CREATE TABLE "RemarkReaction" (
    "remarkId" INTEGER NOT NULL,
    "reactedBy" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RemarkReaction_pkey" PRIMARY KEY ("remarkId","reactedBy")
);

-- CreateTable
CREATE TABLE "Block" (
    "targetUserId" INTEGER NOT NULL,
    "blockerUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Block_pkey" PRIMARY KEY ("targetUserId","blockerUserId")
);

-- AddForeignKey
ALTER TABLE "TalkTheme" ADD CONSTRAINT "TalkTheme_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TalkTheme" ADD CONSTRAINT "TalkTheme_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TalkTheme" ADD CONSTRAINT "TalkTheme_conslusionRemarkId_fkey" FOREIGN KEY ("conslusionRemarkId") REFERENCES "Remark"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Remark" ADD CONSTRAINT "Remark_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "TalkTheme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Remark" ADD CONSTRAINT "Remark_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TalkThemeModerator" ADD CONSTRAINT "TalkThemeModerator_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "TalkTheme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TalkThemeModerator" ADD CONSTRAINT "TalkThemeModerator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RemarkBodyHistory" ADD CONSTRAINT "RemarkBodyHistory_remarkId_fkey" FOREIGN KEY ("remarkId") REFERENCES "Remark"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RemarkReaction" ADD CONSTRAINT "RemarkReaction_remarkId_fkey" FOREIGN KEY ("remarkId") REFERENCES "Remark"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RemarkReaction" ADD CONSTRAINT "RemarkReaction_reactedBy_fkey" FOREIGN KEY ("reactedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Block" ADD CONSTRAINT "Block_targetUserId_fkey" FOREIGN KEY ("targetUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Block" ADD CONSTRAINT "Block_blockerUserId_fkey" FOREIGN KEY ("blockerUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
