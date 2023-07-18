import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Account } from './account';
import { AddAccount } from './add-account';
import { Balance } from './balance';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { EditAccount } from './edit-account';
import { PersonalInfo } from './personal-info';
import { Transactions } from './transactions';

@Injectable({
  providedIn: 'root'
})
export class BalancecheckService {

  constructor(private httpClient: HttpClient) { }

    public balanceCheck(accountNumber: number):Observable<Balance>{
      return this.httpClient.get<Balance>("http://localhost:8090/getBalance/"+accountNumber);
    }

    public balanceCheckCustomer(accountNumber: number):Observable<Balance>{
      return this.httpClient.get<Balance>("http://localhost:8090/getCustomerBalance/"+accountNumber);
    }

    public deposit(accountNumber: number, amount : any):Observable<Account>{
      return this.httpClient.put<Account>("http://localhost:8090/deposit/"+accountNumber, {amount}, { responseType: 'text' as 'json'});
    }

    public withdraw(accountNumber: number, amount : any):Observable<Account>{
      return this.httpClient.put<Account>("http://localhost:8090/withdraw/"+accountNumber, {amount}, { responseType: 'text' as 'json'});
    }

    public fundTransafer(fromAccount: number, toAccount: number, amount:any):Observable<Transactions>{
      return this.httpClient.post<Transactions>("http://localhost:8090/addTransactions", {fromAccount, toAccount, amount}, { responseType: 'text' as 'json'});
    }

    public fundTransaferCustomer(fromAccount: number, toAccount: number, amount:any):Observable<Transactions>{
      return this.httpClient.post<Transactions>("http://localhost:8090/addTransactionsCustomer", {fromAccount, toAccount, amount}, { responseType: 'text' as 'json'});
    }
   
    public miniStatement(accountNumber: number):Observable<Transactions[]>{
      return this.httpClient.get<Transactions[]>("http://localhost:8090/getTransaction/"+accountNumber);
    }

    public miniStatementCustomer(accountNumber: number):Observable<Transactions[]>{
      return this.httpClient.get<Transactions[]>("http://localhost:8090/getCustomerTransaction/"+accountNumber);
    }

    public getAllCustomers():Observable<PersonalInfo[]>{
      return this.httpClient.get<PersonalInfo[]>("http://localhost:8090/getAllCustomers/");
    }

    public addCustomer(personalInfo: PersonalInfo):Observable<PersonalInfo>{
      return this.httpClient.post<PersonalInfo>("http://localhost:8090/addCustomer",personalInfo, { responseType: 'text' as 'json'});
    }

    public editCustomer(personalInfo: PersonalInfo):Observable<PersonalInfo>{
      return this.httpClient.put<PersonalInfo>("http://localhost:8090/editCustomer", personalInfo, { responseType: 'text' as 'json'});
    }

    public addAccount(addAccount: AddAccount):Observable<AddAccount>{
      return this.httpClient.post<AddAccount>("http://localhost:8090/addAccount", addAccount, { responseType: 'text' as 'json'});
    }

    public editAccount(editAccount: EditAccount):Observable<EditAccount>{
      return this.httpClient.put<EditAccount>("http://localhost:8090/editAccount/", editAccount, { responseType: 'text' as 'json'});
    }

    public deleteAccount(accountNumber: number):Observable<Account>{
      return this.httpClient.put<Account>("http://localhost:8090/deleteAccount/"+accountNumber, { responseType: 'text' as 'json'});
    }
}
