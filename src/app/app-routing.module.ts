import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAccountComponent } from './add-account/add-account.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { CheckBalanceCustomerComponent } from './check-balance-customer/check-balance-customer.component';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { DepositComponent } from './deposit/deposit.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { FundTransferCustomerComponent } from './fund-transfer-customer/fund-transfer-customer.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { MiniStatementCustomerComponent } from './mini-statement-customer/mini-statement-customer.component';
import { MiniStatementComponent } from './mini-statement/mini-statement.component';
import { SecurityComponent } from './security/security.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  { path: '', component: SecurityComponent },
  { path: 'home', component: ManagerHomeComponent },
  { path: 'customer-home', component: CustomerHomeComponent },
  { path: 'manager-balance', component: CheckBalanceComponent },
  { path: 'customer-balance', component: CheckBalanceCustomerComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'fund-transfer', component: FundTransferComponent },
  { path: 'mini-statement', component: MiniStatementComponent },
  { path: 'mini-statement-customer', component: MiniStatementCustomerComponent },
  { path: 'fund-transfer-customer', component: FundTransferCustomerComponent },
  { path: 'all-customers', component: AllCustomersComponent },
  { path: 'add-customers', component: AddCustomerComponent },
  { path: 'add-accounts', component: AddAccountComponent },
  { path: 'edit-accounts', component: EditAccountComponent },
  { path: 'delete-accounts', component: DeleteAccountComponent },
  { path: 'edit-customers', component: EditCustomerComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
