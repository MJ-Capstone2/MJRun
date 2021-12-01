import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministratorController } from './administrator.controller';
import { AdministratorRepository } from './administrator.repository';
import { AdministratorService } from './administrator.service';
import { JwtStrategy } from './jwt-strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([AdministratorRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'mjrun2',
      signOptions: {
        expiresIn: 30 * 60,
      },
    }),
  ],
  controllers: [AdministratorController],
  providers: [AdministratorService, JwtStrategy],
  exports: [PassportModule, JwtStrategy],
})
export class AdministratorModule {}
