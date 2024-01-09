import { Test, TestingModule } from '@nestjs/testing';
import { RemarkController } from './remark.controller';
import { RemarkService } from './remark.service';
import { PrismaService } from '../prisma.service';

describe('RemarkController', () => {
    let controller: RemarkController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [RemarkController],
            providers: [RemarkService, PrismaService],
        }).compile();

        controller = module.get<RemarkController>(RemarkController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
