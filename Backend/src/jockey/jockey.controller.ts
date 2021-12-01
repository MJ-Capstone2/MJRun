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

  @Get(':jk_id')
  findOne(@Param('jk_id') jk_id: string) {
    return this.jockeyService.findOne(+jk_id);
  }

  @Patch(':jk_id')
  update(
    @Param('jk_id') jk_id: string,
    @Body() updateJockeyDto: UpdateJockeyDto,
  ) {
    return this.jockeyService.update(+jk_id, updateJockeyDto);
  }

  @Delete(':jk_id')
  remove(@Param('jk_id') jk_id: string) {
    return this.jockeyService.remove(+jk_id);
  }
}
