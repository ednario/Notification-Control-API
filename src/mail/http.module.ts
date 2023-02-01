import { Module } from '@nestjs/common';

import { AppController } from './mail.controller';

import { MailService } from './mail.service';

import { SMTPMailService } from './smt-mail.service';
import { PostmarkMailService } from './postmark-mail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: MailService,
      useClass: SMTPMailService,
    },
    {
      provide: MailService,
      useClass: PostmarkMailService,
    },
  ],
})
export class HttpModule {}
