import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Knex } from 'knex';
import { NotFoundError } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('KNEX_CONNECTION') private readonly db: Knex){}

  getHello(): string {
    throw new NotFoundException('Recurso no encontrado');
    return 'Hello World!';
  }

}
