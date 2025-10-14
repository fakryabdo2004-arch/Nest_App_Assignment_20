import { Module } from '@nestjs/common';
import { ProdectService } from './prodect.service';
import { ProdectController } from './prodect.controller';

@Module({
  controllers: [ProdectController],
  providers: [ProdectService],
})
export class ProdectModule {}
