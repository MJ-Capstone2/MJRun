import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HorseAggregationService } from './horse-aggregation.service';
import { CreateHorseAggregationDto } from './dto/create-horse-aggregation.dto';
import { UpdateHorseAggregationDto } from './dto/update-horse-aggregation.dto';
import { HorseService } from 'src/horse/horse.service';

@Controller('horse-aggregation')
export class HorseAggregationController {
  constructor(
    private readonly horseAggregationService: HorseAggregationService,
    private readonly horseService: HorseService,
  ) {}

  @Post()
  async create(@Body() createHorseAggregationDto: CreateHorseAggregationDto) {
    await this.horseService.findOne(
      createHorseAggregationDto.horse.horse_number,
    );
    return this.horseAggregationService.create(createHorseAggregationDto);
  }

  @Get('/serialize')
  findAllSerialize() {
    return this.horseAggregationService.findAllSerialize();
  }

  @Get()
  findAll() {
    return this.horseAggregationService.findAll();
  }

  @Get(':horse_number')
  findOne(@Param('horse_number') horse_number: string) {
    return this.horseAggregationService.findOne(+horse_number);
  }

  @Patch(':horse_number')
  update(
    @Param('horse_number') horse_number: string,
    @Body() updateHorseAggregationDto: UpdateHorseAggregationDto,
  ) {
    return this.horseAggregationService.update(
      +horse_number,
      updateHorseAggregationDto,
    );
  }

  @Delete(':horse_number')
  remove(@Param('horse_number') horse_number: string) {
    return this.horseAggregationService.remove(+horse_number);
  }
}
