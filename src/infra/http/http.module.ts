import { Module } from '@nestjs/common';

import { DatabaseModule } from '@infra/database/database.module';
import { NotificationsController } from '@infra/http/controllers/notifications.controller';

import { SendNotification } from '@app/use-cases/send-notification';
import { ListNotifications } from '@app/use-cases/list-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification, ListNotifications],
})
export class HttpModule {}
