import { Test, TestingModule } from '@nestjs/testing';
import { RemarkService } from './remark.service';
import { PrismaService } from '../prisma.service';

describe('RemarkService', () => {
    let service: RemarkService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [RemarkService, PrismaService],
        }).compile();

        service = module.get<RemarkService>(RemarkService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
