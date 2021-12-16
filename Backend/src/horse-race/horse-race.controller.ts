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
import { HorseRaceService } from './horse-race.service';
import { CreateHorseRaceDto } from './dto/create-horse-race.dto';
import { UpdateHorseRaceDto } from './dto/update-horse-race.dto';

@Controller('horse-race')
export class HorseRaceController {
  constructor(private readonly horseRaceService: HorseRaceService) {}

  @Post()
  create(@Body() createHorseRaceDto: CreateHorseRaceDto) {
    return this.horseRaceService.create(createHorseRaceDto);
  }
  @Post('multi')
  multiCreate(@Body() createHorseRaceDtos: CreateHorseRaceDto[]) {
    return this.horseRaceService.multiCreate(createHorseRaceDtos);
  }

  @Get()
  findAll() {
    return this.horseRaceService.findAll();
  }

  @Get(':race_id')
  findOne(@Param('race_id') race_id: string) {
    return this.horseRaceService.findOne(+race_id);
  }

  @Patch(':race_id')
  update(
    @Param('race_id') race_id: string,
    @Body() updateHorseRaceDto: UpdateHorseRaceDto,
  ) {
    return this.horseRaceService.update(+race_id, updateHorseRaceDto);
  }

  @Delete(':race_id')
  remove(@Param('race_id') race_id: string) {
    return this.horseRaceService.remove(+race_id);
  }
}
