import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyControllerController } from './my-controller/my-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, MyControllerController],
  providers: [AppService],
})
export class AppModule {}
