import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HorseService } from './horse.service';
import { CreateHorseDto } from './dto/create-horse.dto';
import { UpdateHorseDto } from './dto/update-horse.dto';
import { Horse } from './entities/horse.entity';

@Controller('horse')
export class HorseController {
  constructor(private readonly horseService: HorseService) {}

  @Post()
  create(@Body() createHorseDto: CreateHorseDto): Promise<Horse> {
    return this.horseService.create(createHorseDto);
  }

  @Get()
  findAll() {
    return this.horseService.findAll();
  }

  @Get(':horse_number')
  findOne(@Param('horse_number') horse_number: string) {
    return this.horseService.findOne(+horse_number);
  }

  @Patch(':horse_number')
  update(
    @Param('horse_number') horse_number: string,
    @Body() updateHorseDto: UpdateHorseDto,
  ) {
    return this.horseService.update(+horse_number, updateHorseDto);
  }

  @Delete(':horse_number')
  remove(@Param('horse_number') horse_number: string) {
    return this.horseService.remove(+horse_number);
  }
}
