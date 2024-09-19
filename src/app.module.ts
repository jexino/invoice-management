import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DashboardController } from './dashboard/dashboard.controller';
import { InvoiceController } from './invoice/invoice.controller';

@Module({
  imports: [AuthModule],
  controllers: [AppController, DashboardController, InvoiceController],
  providers: [AppService],
})
export class AppModule {}
