import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { RemarkCreateDto } from '../dto/requests';
import { PrismaService } from '../prisma.service';
import { RemarkResponseDto } from 'src/dto/responses';

@Injectable()
export class RemarkService {
    constructor(private prisma: PrismaService) {}

    defaultImgUri = 'https://avatars.githubusercontent.com/u/12345678?v=4';

    async getRemarksOfTalkTheme(themeId: number): Promise<RemarkResponseDto[]> {
        const remarks = await this.prisma.remark.findMany({
            where: {
                themeId: themeId,
            },
            include: {
                RemarkBodyHistory: {
                    take: 1,
                    orderBy: {
                        version: 'desc',
                    },
                },
            },
        });
        const creator = await this.prisma.user.findUnique({
            where: {
                id: remarks[0].createdByUserId,
            },
        });
        return remarks.map((remark) => {
            return {
                id: remark.id,
                themeId: remark.themeId,
                parentId: remark.parentId,
                mergedToId: remark.mergedToId,
                quotedRemarkId: remark.quotedRemarkId,
                createdByUser: {
                    userId: creator.id,
                    uniqueName: creator.uniqueName,
                    displayName: creator.displayName,
                    imgUri: creator.imgUri ?? this.defaultImgUri,
                },
                createdAt: remark.createdAt,
                updatedAt: remark.updatedAt,
                latestBody: remark.RemarkBodyHistory[0],
            };
        });
    }

    async createRemark(themeId: number, data: RemarkCreateDto): Promise<void> {
        const remarkInput: Prisma.RemarkCreateInput = {
            talkTheme: {
                connect: {
                    id: data.themeId,
                },
            },
            createdBy: {
                connect: {
                    id: data.createdByUserId,
                },
            },
            parentId: data.parentId,
            mergedToId: data.mergedToId,
            quotedRemarkId: data.quotedRemarkId,
        };
        const remark = await this.prisma.remark.create({
            data: remarkInput,
        });

        const remarkBodyInput: Prisma.RemarkBodyHistoryCreateInput = {
            remark: {
                connect: {
                    id: remark.id,
                },
            },
            version: 1, // TODO
            type: data.type,
            message: data.message,
        };
        await this.prisma.remarkBodyHistory.create({
            data: remarkBodyInput,
        });
    }
}
