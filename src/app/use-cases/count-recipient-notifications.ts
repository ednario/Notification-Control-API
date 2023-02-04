import { Injectable } from '@nestjs/common';

import { NotificationRepository } from '@app/repositories/notification-repository';

interface CountNotificationRequest {
  recipientId: string;
}

interface CountNotificationResponse {
  count: number;
}

@Injectable()
export class CountNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: CountNotificationRequest,
  ): Promise<CountNotificationResponse> {
    const { recipientId } = request;

    const count = await this.notificationRepository.countManyByRecipientId(
      recipientId,
    );

    return { count };
  }
}
