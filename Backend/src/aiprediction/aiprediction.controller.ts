import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AIPredictionService } from './aiprediction.service';
import { CreateAIPredictionDto } from './dto/create-aiprediction.dto';
import { UpdateAIPredictionDto } from './dto/update-aiprediction.dto';

@Controller('aiprediction')
export class AIPredictionController {
  constructor(private readonly aiPredictionService: AIPredictionService) {}

  @Post()
  create(@Body() createAipredictionDto: CreateAIPredictionDto) {
    return this.aiPredictionService.create(createAipredictionDto);
  }

  @Get()
  findAll() {
    return this.aiPredictionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aiPredictionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAipredictionDto: UpdateAIPredictionDto,
  ) {
    return this.aiPredictionService.update(+id, updateAipredictionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aiPredictionService.remove(+id);
  }
}
