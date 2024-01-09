import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Remark } from '@prisma/client';
import { RemarkService } from './remark.service';
import { RemarkCreateDto } from '../dto/requests';
import { RemarkResponseDto } from 'src/dto/responses';

@Controller('talks/:talkId/remarks')
export class RemarkController {
    constructor(private remarkService: RemarkService) {}

    @Get()
    async getRemarks(
        @Param('talkId') talkId: number,
    ): Promise<RemarkResponseDto[]> {
        return await this.remarkService.getRemarksOfTalkTheme(talkId);
    }

    @Post()
    async createRemark(
        @Param('talkId') talkId: number,
        @Body() body: RemarkCreateDto,
    ): Promise<void> {
        await this.remarkService.createRemark(talkId, body);
    }
}
