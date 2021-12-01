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
    await this.jockeyService.findOne(createJockeyAggregationDto.jockey.jk_id);
    return this.jockeyAggregationService.create(createJockeyAggregationDto);
  }

  @Get()
  findAll() {
    return this.jockeyAggregationService.findAll();
  }

  @Get(':jk_id')
  findOne(@Param('jk_id') jk_id: string) {
    return this.jockeyAggregationService.findOne(+jk_id);
  }

  @Patch(':jk_id')
  update(
    @Param('jk_id') jk_id: string,
    @Body() updateJockeyAggregationDto: UpdateJockeyAggregationDto,
  ) {
    return this.jockeyAggregationService.update(
      +jk_id,
      updateJockeyAggregationDto,
    );
  }

  @Delete(':jk_id')
  remove(@Param('jk_id') jk_id: string) {
    return this.jockeyAggregationService.remove(+jk_id);
  }
}
