import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { InternalGuard } from 'src/guards/internal.guard';
import { UserRole } from '../model/role.dto';
import { Dog } from './dog.entity';
import { DogService } from './dog.service';

@ApiTags('dog')
@ApiSecurity('csrf-token')
@UseGuards(InternalGuard)
@Controller({
  path: 'dogs',
})
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Post()
  @ApiOperation({
    summary: 'create a dog',
    description: 'This is an optional additional description',
  })
  @ApiBody({ type: Dog, description: 'This is a detailed description' })
  create(@Body() dog: Dog): Dog {
    return this.dogService.create(dog);
  }

  @Get()
  @ApiOperation({
    summary: 'search dogs list',
  })
  @ApiQuery({ name: 'role', enum: UserRole, required: false })
  findAll(@Query('role') role?: UserRole): Dog[] {
    return this.dogService.findAll(role);
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Find dog by id',
  })
  @ApiParam({ name: 'id', type: Number, example: 0 })
  findOne(@Param('id') id: number): Dog {
    return this.dogService.findOne(id);
  }

  @Delete('/:id')
  @ApiOperation({
    summary: 'Delete dog by id',
  })
  @ApiParam({ name: 'id', type: Number, example: 0 })
  delete(@Param('id') id: number) {
    return this.dogService.remove(id);
  }

  @Put('/:id')
  @ApiOperation({
    summary: 'Update dog by id',
  })
  @ApiParam({ name: 'id', type: Number, example: 0 })
  update(@Param('id') id: number, @Body() dog: Dog) {
    return this.dogService.update(id, dog);
  }
}
