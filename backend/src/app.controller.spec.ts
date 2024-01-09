import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { TalkThemeController } from './talk-theme/talk-theme.controller';
import { PrismaService } from './prisma.service';
import { UserService } from './user/user.service';
import { TalkThemeService } from './talk-theme/talk-theme.service';

describe('AppController', () => {
    let appController: AppController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController, UserController, TalkThemeController],
            providers: [
                AppService,
                UserService,
                TalkThemeService,
                PrismaService,
            ],
        }).compile();

        appController = app.get<AppController>(AppController);
    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(appController.getHello()).toBe('Hello World!');
        });
    });
});
