import { Module } from '@nestjs/common';
import { TrainerService } from './trainer.service';
import { TrainerController } from './trainer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainerRepository } from './trainer.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TrainerRepository])],
  controllers: [TrainerController],
  providers: [TrainerService],
})
export class TrainerModule {}
