import { Controller, Get, Body, Query } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { AppService } from './app.service';

@Controller('all_info_at_date')
export class AppController {
  constructor(private appService: AppService) {}

  private isValidDate(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false; // Invalid format
    var d = new Date(dateString);
    var dNum = d.getTime();
    if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return d.toISOString().slice(0, 10) === dateString;
  }

  @Get()
  findAll(@Query('race_date') date: string) {
    if (!this.isValidDate(date)) {
      throw new ValidationError();
    }
    return this.appService.findAll(new Date(date));
  }
}
