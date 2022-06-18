import { Test, TestingModule } from '@nestjs/testing';
import { MyControllerController } from './my-controller.controller';

describe('MyControllerController', () => {
  let controller: MyControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyControllerController],
    }).compile();

    controller = module.get<MyControllerController>(MyControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
