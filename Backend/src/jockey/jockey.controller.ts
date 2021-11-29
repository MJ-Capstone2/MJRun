import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JockeyService } from './jockey.service';
import { CreateJockeyDto } from './dto/create-jockey.dto';
import { UpdateJockeyDto } from './dto/update-jockey.dto';

@Controller('jockey')
export class JockeyController {
  constructor(private readonly jockeyService: JockeyService) {}

  @Post()
  create(@Body() createJockeyDto: CreateJockeyDto) {
    return this.jockeyService.create(createJockeyDto);
  }

  @Get()
  findAll() {
    return this.jockeyService.findAll();
  }

  @Get(':jockey_number')
  findOne(@Param('jockey_number') jockey_number: string) {
    return this.jockeyService.findOne(+jockey_number);
  }

  @Patch(':jockey_number')
  update(
    @Param('jockey_number') jockey_number: string,
    @Body() updateJockeyDto: UpdateJockeyDto,
  ) {
    return this.jockeyService.update(+jockey_number, updateJockeyDto);
  }

  @Delete(':jockey_number')
  remove(@Param('jockey_number') jockey_number: string) {
    return this.jockeyService.remove(+jockey_number);
  }
}
