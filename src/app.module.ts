import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyControllerController } from './my-controller/my-controller.controller';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController, MyControllerController],
  providers: [AppService],
})
export class AppModule {}
