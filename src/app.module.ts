import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { RentController } from './rent/rent.controller';
import { RentService } from './rent/rent.service';
import { DataController } from './data/data.controller';
import { DataService } from './data/data.service';

@Module({
  imports: [],
  controllers: [AppController, LoginController, RentController, DataController],
  providers: [AppService, LoginService, RentService, DataService],
})
export class AppModule {}
