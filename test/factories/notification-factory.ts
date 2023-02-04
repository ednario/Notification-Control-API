import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  const notification = new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    recipientId: 'example-recipient-id1',
    ...override,
  });
  return notification;
}
