import { Test, TestingModule } from '@nestjs/testing';
import { TalkThemeService } from './talk-theme.service';
import { PrismaService } from '../prisma.service';

describe('TalkThemeService', () => {
    let service: TalkThemeService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TalkThemeService, PrismaService],
        }).compile();

        service = module.get<TalkThemeService>(TalkThemeService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
