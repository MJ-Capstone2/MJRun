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
    await this.trainerService.findOne(
      createTrainerAggregationDto.trainer.tr_id,
    );
    return this.trainerAggregationService.create(createTrainerAggregationDto);
  }

  @Get()
  findAll() {
    return this.trainerAggregationService.findAll();
  }

  @Get(':trainer_id')
  findOne(@Param('trainer_id') trainer_id: string) {
    return this.trainerAggregationService.findOne(+trainer_id);
  }

  @Patch(':trainer_id')
  update(
    @Param('trainer_id') trainer_id: string,
    @Body() updateTrainerAggregationDto: UpdateTrainerAggregationDto,
  ) {
    return this.trainerAggregationService.update(
      +trainer_id,
      updateTrainerAggregationDto,
    );
  }

  @Delete(':trainer_id')
  remove(@Param('trainer_id') trainer_id: string) {
    return this.trainerAggregationService.remove(+trainer_id);
  }
}
