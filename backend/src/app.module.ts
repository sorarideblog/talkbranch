import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TalkThemeModule } from './talk-theme/talk-theme.module';
import { RemarkModule } from './remark/remark.module';

@Module({
    imports: [UserModule, TalkThemeModule, RemarkModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
