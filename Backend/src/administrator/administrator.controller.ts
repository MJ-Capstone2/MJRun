import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { Administrator } from './entities/administrator.entity';
import { CreateAdministratorDto } from './dto/create-administrator.dto';

@Controller('admin')
export class AdministratorController {
  constructor(private administratorService: AdministratorService) {}

  @Post('/signIn')
  logInAdministrator(
    @Body('id') id: string,
    @Body('password') pw: string,
  ): Promise<{ accessToken: string }> {
    return this.administratorService.signIn(id, pw);
  }

  @Get('/validation')
  getValidation(@Headers('Authorization') token: string) {
    return this.administratorService.verify(token.split(' ').reverse()[0]);
  }

  @Get('/:id')
  getAdministratorById(@Param('id') id: string): Promise<Administrator> {
    return this.administratorService.getAdministratorById(id);
  }
  @Get()
  getAllAdministrator(): Promise<Administrator[]> {
    return this.administratorService.getAllAdministrator();
  }

  @Post('/signUp')
  createAdministrator(
    @Body(ValidationPipe) createAdministratorDto: CreateAdministratorDto,
  ): Promise<Administrator> {
    return this.administratorService.createAdministrator(
      createAdministratorDto,
    );
  }

  @Delete('/:id')
  deleteAdministrator(@Param('id') id: string): Promise<void> {
    return this.administratorService.deleteAdministrator(id);
  }

  @Patch('/:id/email')
  updateAdministratorEmail(
    @Param('id') id: string,
    @Body('email') email: string,
  ): Promise<Administrator> {
    return this.administratorService.updateAdministratorEmail(id, email);
  }

  @Patch('/:id/password')
  updateAdministratorPassword(
    @Param('id') id: string,
    @Body('password') pw: string,
  ): Promise<Administrator> {
    return this.administratorService.updateAdministratorPassword(id, pw);
  }
}
