import { Injectable } from '@nestjs/common';

import { Notification } from '@app/entities/notification';
import { NotificationRepository } from '@app/repositories/notification-repository';

@Injectable()
export class ListNotifications {
  constructor(private notificationRepository: NotificationRepository) {}

  async listAll(): Promise<Array<Notification>> {
    const notifications = await this.notificationRepository.listAll();

    return notifications;
  }
}
