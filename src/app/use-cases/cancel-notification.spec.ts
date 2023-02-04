import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';

import { CancelNotification } from '@app/use-cases/cancel-notification';
import { NotificationNotFound } from '@app/use-cases/errors/notification-not-found';

describe('Canceled notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    const notification = new Notification({
      category: 'social',
      content: new Content('Nova solicitação de amizade!'),
      recipientId: 'example-recipient-id',
    });

    await notificationRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification_id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
