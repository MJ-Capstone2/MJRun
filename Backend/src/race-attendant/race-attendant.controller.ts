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
import { RaceAttendantService } from './race-attendant.service';
import { CreateRaceAttendantDto } from './dto/create-race-attendant.dto';
import { UpdateRaceAttendantDto } from './dto/update-race-attendant.dto';

@Controller('race-attendant')
export class RaceAttendantController {
  constructor(private readonly raceAttendantService: RaceAttendantService) {}

  @Post()
  create(@Body() createRaceAttendantDto: CreateRaceAttendantDto) {
    return this.raceAttendantService.create(createRaceAttendantDto);
  }
  @Post()
  multiCreate(@Body() createRaceAttendantDtos: CreateRaceAttendantDto[]) {
    return this.raceAttendantService.multiCreate(createRaceAttendantDtos);
  }

  @Get()
  findAll() {
    return this.raceAttendantService.findAll();
  }

  @Get('horse-race/:race_id')
  findAllByRaceId(@Param('race_id') race_id: string) {
    return this.raceAttendantService.findAll(+race_id);
  }

  @Get(':ra_id')
  findOne(@Param('ra_id') ra_id: string) {
    return this.raceAttendantService.findOne(+ra_id);
  }

  @Patch(':ra_id') // - 경기 id - 일자 + 지역 + round / linenumber / ord
  update(
    @Param('ra_id') ra_id: string,
    @Body() updateRaceAttendantDto: UpdateRaceAttendantDto,
  ) {
    return this.raceAttendantService.update(+ra_id, updateRaceAttendantDto);
  }

  @Delete(':ra_id')
  remove(@Param('ra_id') ra_id: string) {
    return this.raceAttendantService.remove(+ra_id);
  }

  @Post('/result/:race_id')
  addResult(
    @Param('race_id', ParseIntPipe) race_id: number,
    @Body() results: JSON,
  ): Promise<void> {
    return this.raceAttendantService.addResult(race_id, results);
  }

  // @Post('/weekly-update')
  // weeklyUpdate(@Body() data: JSON) {
  //   this.raceAttendantService.weeklyUpdate(data['data']);
  // }
}
