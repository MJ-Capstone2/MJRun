import { Module } from '@nestjs/common';
import { JockeyService } from './jockey.service';
import { JockeyController } from './jockey.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JockeyRepository } from './jockey.repository';

@Module({
  imports: [TypeOrmModule.forFeature([JockeyRepository])],
  controllers: [JockeyController],
  providers: [JockeyService],
})
export class JockeyModule {}
