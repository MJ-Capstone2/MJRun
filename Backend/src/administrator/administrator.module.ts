import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministratorController } from './administrator.controller';
import { AdministratorRepository } from './administrator.repository';
import { AdministratorService } from './administrator.service';

@Module({
  imports: [TypeOrmModule.forFeature([AdministratorRepository])],
  controllers: [AdministratorController],
  providers: [AdministratorService],
})
export class AdministratorModule {}
