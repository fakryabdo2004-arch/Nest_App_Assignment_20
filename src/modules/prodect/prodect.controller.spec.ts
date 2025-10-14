import { Test, TestingModule } from '@nestjs/testing';
import { ProdectController } from './prodect.controller';
import { ProdectService } from './prodect.service';

describe('ProdectController', () => {
  let controller: ProdectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdectController],
      providers: [ProdectService],
    }).compile();

    controller = module.get<ProdectController>(ProdectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
