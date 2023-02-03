import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { ListNotifications } from 'src/app/use-cases/list-notifications';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification, private list: ListNotifications) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification };
  }

  @Get()
  async listAll() {
    const notifications = await this.list.listAll();

    return { notifications };
  }
}
