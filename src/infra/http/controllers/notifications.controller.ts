import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateNotificationBody } from '@infra/http/dtos/create-notification-body';
import { NotificationViewModel } from '@infra/http/view-models/notification-view-model';

import { SendNotification } from '@app/use-cases/send-notification';
import { ListNotifications } from '@app/use-cases/list-notifications';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private list: ListNotifications,
  ) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return NotificationViewModel.toHTTP(notification);
  }

  @Get()
  async listAll() {
    const notifications = await this.list.listAll();

    return { notifications };
  }
}
