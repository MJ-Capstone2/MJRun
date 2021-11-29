import { Module } from '@nestjs/common';
import { HorseService } from './horse.service';
import { HorseController } from './horse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorseRepository } from './horse.repository';

@Module({
  imports: [TypeOrmModule.forFeature([HorseRepository])],
  controllers: [HorseController],
  providers: [HorseService],
})
export class HorseModule {}
