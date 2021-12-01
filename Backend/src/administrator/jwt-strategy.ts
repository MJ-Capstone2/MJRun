import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AdministratorService } from './administrator.service';
import { Administrator } from './entities/administrator.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    // @InjectRepository(AdministratorRepository)
    // private adminRepository: AdministratorRepository,
    private adminService: AdministratorService,
  ) {
    super({
      secretOrKey: 'mjrun2',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload) {
    const { id } = payload;
    const admin: Administrator = await this.adminService.getAdministratorById(
      id,
    );
    if (!admin) throw new UnauthorizedException();

    return admin;
  }
}
