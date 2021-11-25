import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { Administrator } from './entities/administrator.entity';
import { CreateAdministratorDto } from './dto/create-administrator.dto';

@Controller('administrator')
export class AdministratorController {
  constructor(private administratorService: AdministratorService) {}

  @Get('/login')
  logInAdministrator(
    @Body('id') id: string,
    @Body('password') pw: string,
  ): Promise<Boolean> {
    return this.administratorService.logIn(id, pw);
  }

  @Get('/:id')
  getAdministratorById(@Param('id') id: string): Promise<Administrator> {
    return this.administratorService.getAdministratorById(id);
  }
  @Get()
  getAllAdministrator(): Promise<Administrator[]> {
    return this.administratorService.getAllAdministrator();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createAdministrator(
    @Body() createAdministratorDto: CreateAdministratorDto,
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
