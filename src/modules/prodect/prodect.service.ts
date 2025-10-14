import { Injectable } from '@nestjs/common';
import { CreateProdectDto } from './dto/create-prodect.dto';
import { UpdateProdectDto } from './dto/update-prodect.dto';

@Injectable()
export class ProdectService {
  create(createProdectDto: CreateProdectDto) {
    return 'This action adds a new prodect';
  }

  findAll() {
    return `This action returns all prodect`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prodect`;
  }

  update(id: number, updateProdectDto: UpdateProdectDto) {
    return `This action updates a #${id} prodect`;
  }

  remove(id: number) {
    return `This action removes a #${id} prodect`;
  }
}
