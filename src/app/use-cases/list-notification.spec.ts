import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { ListNotifications } from './list-notifications';

describe('List notifications', () => {
  it('should be able to return all notifications', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const listNotifications = new ListNotifications(notificationRepository);

    const notifications = await listNotifications.listAll();

    expect(notificationRepository.notifications).toEqual(notifications);
  });
});
