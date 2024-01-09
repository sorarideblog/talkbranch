import { RemarkType, TalkThemeMode } from '@prisma/client';
import { Type } from 'class-transformer';
import {
    IsBoolean,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString,
} from 'class-validator';

export class TalkThemeCreateDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsBoolean()
    @Type(() => Boolean)
    isPublic: boolean;

    @IsNotEmpty()
    mode: TalkThemeMode;

    @IsInt()
    @Type(() => Number)
    ownerId: number;

    @IsBoolean()
    @Type(() => Boolean)
    allowRemarkAfterConclusion: boolean;

    @IsBoolean()
    @Type(() => Boolean)
    allowRemarkEdit: boolean;

    @IsInt()
    @Type(() => Number)
    createdByUserId: number; // TODO: このフィールドはownerIdと同じ値になるはずなので、ownerIdに統合する
}

export class RemarkCreateDto {
    @IsInt()
    @Type(() => Number)
    themeId: number;

    @IsInt()
    @IsOptional()
    @Type(() => Number)
    parentId: number | null;

    @IsInt()
    @IsOptional()
    @Type(() => Number)
    mergedToId: number | null;

    @IsInt()
    @IsOptional()
    @Type(() => Number)
    quotedRemarkId: number | null;

    @IsInt()
    @Type(() => Number)
    createdByUserId: number;

    @IsString()
    @IsNotEmpty()
    message: string;

    @IsEnum(RemarkType)
    @IsNotEmpty()
    type: RemarkType;
}
