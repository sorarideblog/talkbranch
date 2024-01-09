export type TalkThemeResponseDto = {
    id: number;
    title: string;
    createdByUserId: number;
    ownerId: number;
    isPublic: boolean;
    mode: string;
    createdAt: Date;
    updatedAt: Date;
};

export type RemarkResponseDto = {
    id: number;
    themeId: number;
    parentId: number | null;
    mergedToId: number | null;
    quotedRemarkId: number | null;
    createdByUser: {
        userId: number;
        uniqueName: string;
        displayName: string;
        imgUri: string;
    };
    createdAt: Date;
    updatedAt: Date;
    latestBody: {
        remarkId: number;
        version: number;
        type: string;
        message: string;
        createdAt: Date;
    };
};
