import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { AIPredictionService } from './aiprediction.service';
import { UpdateAIPredictionDto } from './dto/update-aiprediction.dto';

@Controller('aiprediction')
export class AIPredictionController {
  constructor(private readonly aiPredictionService: AIPredictionService) {}

  @Get()
  findAll() {
    return this.aiPredictionService.findAll();
  }

  @Get('/precision')
  getPrecision(@Query('period') period: string, @Query('order') order: string) {
    return this.aiPredictionService.getPrecision(period, +order);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.aiPredictionService.findOne(id);
  }
  @Post(':id')
  create(@Param('id', ParseIntPipe) id: number) {
    this.aiPredictionService.create(id);
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
