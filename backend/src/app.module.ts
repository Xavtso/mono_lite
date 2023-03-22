import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/user.model';
import { AccountsModule } from './accounts/accounts.module';
import { CardsService } from './cards/cards.service';
import { CardsModule } from './cards/cards.module';
import { Card } from './cards/card.model';
import * as mssql from 'mssql';
import * as tedious from 'tedious'

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'mssql',
      dialectModule: tedious,
      username: 'CloudSA08c87698',
      password: 'vh2004r44VH',
      host: 'monolite.database.windows.net',
      port: 1433,
      database: 'mono_db',
      dialectOptions: {
        driver: {
          version: 'ODBC Driver 18 for SQL Server',
        },
        options: {
          encrypt: true,
          database: 'mono_db',
          authentication: {
            type: 'azure-active-directory-msi-app-service'
          }
        },
        encrypt: true,
        trustServerCertificate: false,
      },
      models: [User, Card],
      autoLoadModels: true,
    }),
    UsersModule,
    CardsModule,
  ],
})
export class AppModule {}
