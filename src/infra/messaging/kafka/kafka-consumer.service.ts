import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['ethical-deer-8563-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'ZXRoaWNhbC1kZWVyLTg1NjMkJV8fxO7-BBtOqX9_YlJeBaWudywYJvsgFHY1SNw',
          password:
            'S14g74rJ0lUrdIn5JDnQTjHee7OjJRpR-EmhsUkS1dJ_jP7T59SL7H59hgYYqh8rqymZSg==',
        },
        ssl: true,
      },
    });
  }

  // Se o node fechar, fechar a conexão com o kafka
  async onModuleDestroy() {
    await this.close();
  }
}
