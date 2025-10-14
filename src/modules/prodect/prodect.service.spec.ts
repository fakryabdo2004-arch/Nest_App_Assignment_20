import { Test, TestingModule } from '@nestjs/testing';
import { ProdectService } from './prodect.service';

describe('ProdectService', () => {
  let service: ProdectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdectService],
    }).compile();

    service = module.get<ProdectService>(ProdectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
