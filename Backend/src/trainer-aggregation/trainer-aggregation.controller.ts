import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TrainerAggregationService } from './trainer-aggregation.service';
import { CreateTrainerAggregationDto } from './dto/create-trainer-aggregation.dto';
import { UpdateTrainerAggregationDto } from './dto/update-trainer-aggregation.dto';
import { TrainerService } from 'src/trainer/trainer.service';

@Controller('trainer-aggregation')
export class TrainerAggregationController {
  constructor(
    private readonly trainerAggregationService: TrainerAggregationService,
    private readonly trainerService: TrainerService,
  ) {}

  @Post()
  async create(
    @Body() createTrainerAggregationDto: CreateTrainerAggregationDto,
  ) {
    await this.trainerService.findOne(createTrainerAggregationDto.trainer.id);
    return this.trainerAggregationService.create(createTrainerAggregationDto);
  }

  @Get()
  findAll() {
    return this.trainerAggregationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainerAggregationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrainerAggregationDto: UpdateTrainerAggregationDto,
  ) {
    return this.trainerAggregationService.update(
      +id,
      updateTrainerAggregationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainerAggregationService.remove(+id);
  }
}
