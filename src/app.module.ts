import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { NotificationsController } from './infra/http/controllers/notifications.controller';
import { PrismaService } from './infra/database/prisma/prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [NotificationsController],
  providers: [PrismaService],
})
export class AppModule {}
