import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MyServiceService } from './my-service/my-service.service';
import { MyControllerController } from './my-controller/my-controller.controller';
import { MyMiddlewareMiddleware } from './my-middleware/my-middleware.middleware';

@Module({
  controllers: [MyControllerController],
  providers: [MyServiceService],
})
export class MyModuleModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MyMiddlewareMiddleware)
      .forRoutes({
        path: '/my-controller/middleware',
        method: RequestMethod.GET,
      });
  }
}
