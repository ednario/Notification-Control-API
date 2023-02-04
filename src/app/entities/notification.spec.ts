import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipient id',
    });

    expect(notification).toBeTruthy();
  });
});
