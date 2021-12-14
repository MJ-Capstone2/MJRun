import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JockeyAggregationService } from './jockey-aggregation.service';
import { CreateJockeyAggregationDto } from './dto/create-jockey-aggregation.dto';
import { UpdateJockeyAggregationDto } from './dto/update-jockey-aggregation.dto';
import { JockeyService } from 'src/jockey/jockey.service';

@Controller('jockey-aggregation')
export class JockeyAggregationController {
  constructor(
    private readonly jockeyAggregationService: JockeyAggregationService,
    private readonly jockeyService: JockeyService,
  ) {}

  @Post()
  async create(@Body() createJockeyAggregationDto: CreateJockeyAggregationDto) {
    await this.jockeyService.findOne(createJockeyAggregationDto.jockey.id);
    return this.jockeyAggregationService.create(createJockeyAggregationDto);
  }

  @Get()
  findAll() {
    return this.jockeyAggregationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jockeyAggregationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateJockeyAggregationDto: UpdateJockeyAggregationDto,
  ) {
    return this.jockeyAggregationService.update(
      +id,
      updateJockeyAggregationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jockeyAggregationService.remove(+id);
  }
}
