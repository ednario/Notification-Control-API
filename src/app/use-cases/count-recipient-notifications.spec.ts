import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';

import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';

import { CountNotification } from '@app/use-cases/count-recipient-notifications';

describe('Count notification', () => {
  it('should be able to count the notification number of a recipient', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountNotification(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-recipient-id1',
    });

    expect(count).toEqual(2);
  });
});
