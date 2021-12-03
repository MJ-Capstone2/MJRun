import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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

  @Patch(':ra_id')
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
}