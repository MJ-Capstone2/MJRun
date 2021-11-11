import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HorseController } from './horse/horse.controller';
import { UserController } from './user/user.controller';
import { RaceController } from './race/race.controller';
import { RaceresultController } from './raceresult/raceresult.controller';
import { JockeyController } from './jockey/jockey.controller';
import { TrainerController } from './trainer/trainer.controller';
import { WheatherController } from './wheather/wheather.controller';
import { UserService } from './user/user.service';
import { MySqlConfigModule } from './config/database/config.module';
import { MySqlConfigService } from './config/database/config.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [MySqlConfigModule],
      useClass: MySqlConfigService,
      inject: [MySqlConfigService],
    }),
    UserModule,
  ],
  controllers: [
    AppController,
    HorseController,
    UserController,
    RaceController,
    RaceresultController,
    JockeyController,
    TrainerController,
    WheatherController,
  ],
  providers: [AppService, UserService],
})
export class AppModule {}
