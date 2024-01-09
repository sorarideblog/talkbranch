import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TalkThemeResponseDto } from 'src/dto/responses';
import { TalkThemeService } from './talk-theme.service';
import { TalkThemeCreateDto } from '../dto/requests';

@Controller('talks')
export class TalkThemeController {
    constructor(private talkThemeService: TalkThemeService) {}

    @Get()
    async getTalkThemes(): Promise<TalkThemeResponseDto[]> {
        return await this.talkThemeService.getTalkThemes();
    }

    @Post()
    async createTalkTheme(
        @Body() body: TalkThemeCreateDto,
    ): Promise<TalkThemeResponseDto> {
        return await this.talkThemeService.createTalkTheme(body);
    }

    @Get(':id')
    async getTalkTheme(@Param('id') id: string): Promise<TalkThemeResponseDto> {
        return await this.talkThemeService.getTalkTheme(id);
    }
}
