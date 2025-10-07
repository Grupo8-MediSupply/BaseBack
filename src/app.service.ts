import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';

@Injectable()
export class AppService {
  constructor(@Inject('KNEX_CONNECTION') private readonly db: Knex){}

  getHello(): string {
    return 'Hello World!';
  }

}
