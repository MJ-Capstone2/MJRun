import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MySqlConfigModule } from './config/database/config.module';
import { MySqlConfigService } from './config/database/config.service';
import { AdministratorModule } from './administrator/administrator.module';
import { HorseModule } from './horse/horse.module';
import { JockeyModule } from './jockey/jockey.module';
import { TrainerModule } from './trainer/trainer.module';
import { HorseAggregationModule } from './horse-aggregation/horse-aggregation.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [MySqlConfigModule],
      useClass: MySqlConfigService,
      inject: [MySqlConfigService],
    }),
    AdministratorModule,
    HorseModule,
    JockeyModule,
    TrainerModule,
    HorseAggregationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
