import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('app')
export class AppController {
  constructor(private readonly mailService: MailService) {}

  @Get('smtp')
  getHello(): string {
    return this.mailService.sendEmail();
  }
  @Get('postmark')
  getPostmark(): string {
    return this.mailService.sendEmail();
  }
}
