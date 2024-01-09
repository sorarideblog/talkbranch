import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TalkThemeCreateDto } from 'src/dto/requests';
import { TalkThemeResponseDto } from 'src/dto/responses';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TalkThemeService {
    constructor(private prisma: PrismaService) {}

    async getTalkThemes(): Promise<TalkThemeResponseDto[]> {
        return await this.prisma.talkTheme.findMany();
    }

    async createTalkTheme(
        data: TalkThemeCreateDto,
    ): Promise<TalkThemeResponseDto> {
        const input: Prisma.TalkThemeCreateInput = {
            title: data.title,
            isPublic: data.isPublic,
            mode: data.mode,
            allowRemarkAfterConclusion: data.allowRemarkAfterConclusion,
            allowRemarkEdit: data.allowRemarkEdit,
            talkThemeCreator: {
                connect: {
                    id: data.createdByUserId,
                },
            },
            talkThemeOwner: {
                connect: {
                    id: data.ownerId,
                },
            },
        };
        return await this.prisma.talkTheme.create({
            data: input,
        });
    }

    async getTalkTheme(id: string): Promise<TalkThemeResponseDto> {
        return await this.prisma.talkTheme.findUnique({
            where: {
                id: Number(id),
            },
        });
    }
}
