import { Injectable } from '@nestjs/common';

import { Notification } from '../entities/notification';
import { NotificationRepository } from '../repositories/notification-repository';

@Injectable()
export class ListNotifications {
  constructor(private notificationRepository: NotificationRepository) {}

  async listAll(): Promise<Array<Notification>> {
    const notifications = await this.notificationRepository.listAll();

    return notifications;
  }
}
