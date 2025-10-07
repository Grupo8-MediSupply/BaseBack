import { Global, Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './exceptions/http-exception.filter';

@Global()
@Module({
    providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter, // <-- se registra globalmente
    },
  ],
})
export class SharedModule {}
