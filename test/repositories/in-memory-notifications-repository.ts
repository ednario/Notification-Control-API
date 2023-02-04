import { NotificationRepository } from '@app/repositories/notification-repository';
import { Notification } from '@app/entities/notification';

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async listAll(): Promise<Notification[]> {
    return this.notifications;
  }
}
