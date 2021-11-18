import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TrainerService } from './trainer.service';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { Trainer } from './entities/trainer.entity';

@Controller('trainer')
export class TrainerController {
  constructor(private readonly trainerService: TrainerService) {}

  @Post()
  create(@Body() createTrainerDto: CreateTrainerDto): Promise<Trainer> {
    return this.trainerService.create(createTrainerDto);
  }

  @Get()
  findAll(): Promise<Trainer[]> {
    return this.trainerService.findAll();
  }

  @Get(':trainer_number')
  findOne(@Param('trainer_number') trainer_number: string): Promise<Trainer> {
    return this.trainerService.findOne(+trainer_number);
  }

  @Patch(':trainer_number')
  update(
    @Param('trainer_number') trainer_number: string,
    @Body() updateTrainerDto: UpdateTrainerDto,
  ): Promise<Trainer> {
    return this.trainerService.update(+trainer_number, updateTrainerDto);
  }

  @Delete(':trainer_number')
  remove(@Param('trainer_number') trainer_number: string): Promise<void> {
    return this.trainerService.remove(+trainer_number);
  }
}
