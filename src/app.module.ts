import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MyModuleModule } from './my-module/my-module.module';

@Module({
  imports: [CatsModule, MyModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
