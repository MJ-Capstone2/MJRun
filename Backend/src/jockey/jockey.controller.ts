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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jockeyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJockeyDto: UpdateJockeyDto) {
    return this.jockeyService.update(+id, updateJockeyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jockeyService.remove(+id);
  }
}
