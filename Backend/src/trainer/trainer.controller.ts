import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
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
  @Post('multi')
  multiCreate(@Body() createTrainerDtos: CreateTrainerDto[]): Promise<void> {
    return this.trainerService.multiCreate(createTrainerDtos);
  }

  @Get()
  findAll(): Promise<Trainer[]> {
    return this.trainerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Trainer> {
    return this.trainerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrainerDto: UpdateTrainerDto,
  ): Promise<Trainer> {
    return this.trainerService.update(+id, updateTrainerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.trainerService.remove(+id);
  }
  @Delete()
  removeAll(@Query('id') ids: string[]): Promise<void> {
    return this.trainerService.removeAll(ids);
  }
}
