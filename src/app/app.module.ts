import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { BalancecheckService } from './balancecheck.service';
import { SecurityComponent } from './security/security.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { JWtInterceptor } from './interceptor';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CheckBalanceCustomerComponent } from './check-balance-customer/check-balance-customer.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { MiniStatementComponent } from './mini-statement/mini-statement.component';
import { FundTransferCustomerComponent } from './fund-transfer-customer/fund-transfer-customer.component';
import { MiniStatementCustomerComponent } from './mini-statement-customer/mini-statement-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { HeaderComponent } from './header/header.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
@NgModule({
  declarations: [
    AppComponent,
    CheckBalanceComponent,
    SecurityComponent,
    ManagerHomeComponent,
    CustomerHomeComponent,
    CheckBalanceCustomerComponent,
    AllCustomersComponent,
    DepositComponent,
    WithdrawComponent,
    FundTransferComponent,
    MiniStatementComponent,
    FundTransferCustomerComponent,
    MiniStatementCustomerComponent,
    AddCustomerComponent,
    AddAccountComponent,
    EditAccountComponent,
    DeleteAccountComponent,
    HeaderComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [BalancecheckService,
    { provide: HTTP_INTERCEPTORS, useClass: JWtInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
