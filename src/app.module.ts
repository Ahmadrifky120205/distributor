import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { TransactionsModule } from './transactions/transactions.module';
import { PaymentsModule } from './payments/payments.module';
import { ScheduleModule } from './schedule/schedule.module';
import { ReportsModule } from './reports/reports.module';
import { OrdersModule } from './orders/orders.module';
import { InventoryModule } from './inventory/inventory.module';
import { ProductsModule } from './products/products.module';
import { SuppliersService } from './suppliers/suppliers.service';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    SuppliersModule,
    ProductsModule,
    InventoryModule,
    OrdersModule,
    ReportsModule,
    ScheduleModule,
    PaymentsModule,
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService, SuppliersService],
})
export class AppModule {}
