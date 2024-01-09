import { Module } from '@nestjs/common';
import { RemarkController } from './remark.controller';
import { RemarkService } from './remark.service';
import { PrismaService } from '../prisma.service';

@Module({
    controllers: [RemarkController],
    providers: [RemarkService, PrismaService],
})
export class RemarkModule {}
