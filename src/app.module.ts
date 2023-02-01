import { Module } from '@nestjs/common';
import { HttpModule } from './mail/http.module';

@Module({
  imports: [HttpModule],
})
export class AppModule {}
