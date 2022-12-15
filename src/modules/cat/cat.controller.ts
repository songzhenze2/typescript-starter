import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserRole } from '../model/role.dto';
import { Cat } from './cat.entity';
import { CatService } from './cat.service';

@ApiTags('cat')
@Controller({ path: 'cat' })
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  create(@Body() dog: Cat): Cat {
    return this.catService.create(dog);
  }

  @Get()
  findAll(@Query('role') role?: UserRole): Cat[] {
    return this.catService.findAll(role);
  }

  @Get('/:id')
  findOne(@Param('id') id: number): Cat {
    return this.catService.findOne(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.catService.remove(id);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() dog: Cat) {
    return this.catService.update(id, dog);
  }
}
