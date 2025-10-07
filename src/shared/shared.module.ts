import { Global, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AllExceptionsFilter } from './exceptions/http-exception.filter';
import { ResponseInterceptor } from './interceptors/response.interceptor';

@Global()
@Module({
    providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter, // <-- se registra globalmente
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class SharedModule {}
