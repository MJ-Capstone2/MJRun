import {
  Controller,
  Get,
  Query,
  UploadedFiles,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ValidationError } from 'class-validator';
import { diskStorage } from 'multer';
import { join } from 'path';
import { AppService } from './app.service';

@Controller('all-info')
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

  @Get('at-date')
  findAll(@Query('race_date') date: string) {
    if (!this.isValidDate(date)) {
      throw new ValidationError();
    }
    return this.appService.findAll(new Date(date));
  }

  @Get('results')
  findAllResult() {
    return this.appService.findAllResult();
  }

  @Post('create')
  @UseInterceptors(
    FilesInterceptor('files', null, {
      storage: diskStorage({
        destination: join(__dirname, '../tempUpload'),
        filename: (req, file, callback) => {
          callback(null, file.originalname);
        },
      }),
    }),
  )
  multiCreate(@UploadedFiles() files: File[]) {
    return this.appService.uploads(files);
  }
}
