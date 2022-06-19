import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyControllerController } from './my-controller/my-controller.controller';
import { CatsModule } from './cats/cats.module';
import { MyServiceService } from './my-service/my-service.service';

@Module({
  imports: [CatsModule],
  controllers: [AppController, MyControllerController],
  providers: [AppService, MyServiceService],
})
export class AppModule {}
