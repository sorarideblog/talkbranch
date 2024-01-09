import { TalkThemeService } from './talk-theme.service';
import { Test, TestingModule } from '@nestjs/testing';
import { TalkThemeController } from './talk-theme.controller';
import { PrismaService } from '../prisma.service';

describe('TalkThemeController', () => {
    let controller: TalkThemeController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TalkThemeController],
            providers: [TalkThemeService, PrismaService],
        }).compile();

        controller = module.get<TalkThemeController>(TalkThemeController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
