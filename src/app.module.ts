import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres', // Replace with your PostgreSQL username
    password: 'Anuj@12345', // Replace with your PostgreSQL password
    database: 'Agro-Connect',      // Name your database
    autoLoadEntities: true,
    synchronize: true,            // Set to false in production
  }),
  UserModule,
  AuthModule
],
  controllers: [AppController],
  providers: [AppService],
  exports:[
  UserModule,
  AuthModule
  ]
})
export class AppModule implements NestModule  {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
