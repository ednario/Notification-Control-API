import { Module } from '@nestjs/common';

import { DatabaseModule } from '@infra/database/database.module';
import { NotificationsController } from '@infra/http/controllers/notifications.controller';

import { SendNotification } from '@app/use-cases/send-notification';
import { ListNotifications } from '@app/use-cases/list-notifications';
import { GetRecipientNotifications } from '@app/use-cases/get-recipient-notifications';
import { UnreadNotification } from '@app/use-cases/unread-notification';
import { ReadNotification } from '@app/use-cases/read-notification';
import { CountRecipientNotifications } from '@app/use-cases/count-recipient-notifications';
import { CancelNotification } from '@app/use-cases/cancel-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    ListNotifications,
    GetRecipientNotifications,
    UnreadNotification,
    ReadNotification,
    CountRecipientNotifications,
    CancelNotification,
  ],
})
export class HttpModule {}
