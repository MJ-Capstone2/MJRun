import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HorseController } from './horse/horse.controller';
import { UserController } from './user/user.controller';
import { RaceController } from './race/race.controller';
import { RaceresultController } from './raceresult/raceresult.controller';
import { JockeyController } from './jockey/jockey.controller';
import { TrainerController } from './trainer/trainer.controller';
import { WheatherController } from './wheather/wheather.controller';

@Module({
  imports: [],
  controllers: [AppController, HorseController, UserController, RaceController, RaceresultController, JockeyController, TrainerController, WheatherController],
  providers: [AppService],
})
export class AppModule {}
