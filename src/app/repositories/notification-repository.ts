import { Notification } from '../entities/notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;

  abstract listAll(): Promise<Array<Notification>>;
}
