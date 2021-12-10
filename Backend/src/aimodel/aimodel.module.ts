import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RaceAttendantRepository } from 'src/race-attendant/race-attendant.repository';
import { AimodelService } from './aimodel.service';

@Module({
  imports: [TypeOrmModule.forFeature([RaceAttendantRepository])],
  providers: [AimodelService],
})
export class AIModelModule {}
