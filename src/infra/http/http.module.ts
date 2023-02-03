import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { SendNotification } from '../../app/use-cases/send-notification';
import { NotificationsController } from './controllers/notifications.controller';
import { ListNotifications } from 'src/app/use-cases/list-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification, ListNotifications],
})
export class HttpModule {}
