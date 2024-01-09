import { Module } from '@nestjs/common';
import { TalkThemeController } from './talk-theme.controller';
import { TalkThemeService } from './talk-theme.service';
import { PrismaService } from '../prisma.service';

@Module({
    controllers: [TalkThemeController],
    providers: [TalkThemeService, PrismaService],
})
export class TalkThemeModule {}
