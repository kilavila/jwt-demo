import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(
    private appService: AppService
  ) {}

  @Post('auth/login')
  async login(@Body() body) {
    return await this.appService.login(body.phone);
  }

}
