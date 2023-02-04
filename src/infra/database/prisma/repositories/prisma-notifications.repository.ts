import { Injectable } from '@nestjs/common';

import { PrismaService } from '@infra/database/prisma/prisma.service';
import { PrismaNotificationMapper } from '@infra/database/prisma/mappers/prisma-notification-mapper';

import { Notification } from '@app/entities/notification';
import { NotificationRepository } from '@app/repositories/notification-repository';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw,
    });
  }

  async listAll(): Promise<any> {
    return await this.prismaService.notification.findMany();
  }
}
