import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { AIPredictionService } from './aiprediction.service';
import { UpdateAIPredictionDto } from './dto/update-aiprediction.dto';

@Controller('aiprediction')
export class AIPredictionController {
  constructor(private readonly aiPredictionService: AIPredictionService) {}

  @Post('/:race_id')
  async prediction(
    @Param('race_id', ParseIntPipe) race_id: number,
  ): Promise<number[][]> {
    return await this.aiPredictionService.pridiction(race_id);
  }

  @Get()
  findAll() {
    return this.aiPredictionService.findAll();
  }

  @Get(':race_id')
  findOne(@Param('race_id') id: string) {
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
