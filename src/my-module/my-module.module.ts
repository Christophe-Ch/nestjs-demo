import { Module } from '@nestjs/common';
import { MyServiceService } from './my-service/my-service.service';
import { MyControllerController } from './my-controller/my-controller.controller';

@Module({
  controllers: [MyControllerController],
  providers: [MyServiceService],
})
export class MyModuleModule {}
