import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdectService } from './prodect.service';
import { CreateProdectDto } from './dto/create-prodect.dto';
import { UpdateProdectDto } from './dto/update-prodect.dto';

@Controller('prodect')
export class ProdectController {
  constructor(private readonly prodectService: ProdectService) {}

  @Post()
  create(@Body() createProdectDto: CreateProdectDto) {
    return this.prodectService.create(createProdectDto);
  }

  @Get()
  findAll() {
    return this.prodectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prodectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdectDto: UpdateProdectDto) {
    return this.prodectService.update(+id, updateProdectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prodectService.remove(+id);
  }
}
