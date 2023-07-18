import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { BalancecheckService } from '../balancecheck.service';
import { Transactions } from '../transactions';

@Component({
  selector: 'app-fund-transfer-customer',
  templateUrl: './fund-transfer-customer.component.html',
  styleUrls: ['./fund-transfer-customer.component.css']
})
export class FundTransferCustomerComponent implements OnInit {

  transaction: Transactions=new Transactions
  account: Account=new Account

  constructor(private service: BalancecheckService) { }

  ngOnInit(): void {
  }

  fundTransfer(){
    if(this.transaction.fromAccount==null || this.transaction.toAccount==null || this.transaction.amount==null){
      alert("Please enter required information in all fields")
    }else{
      let resp = this.service.fundTransaferCustomer(this.transaction.fromAccount, this.transaction.toAccount, this.transaction.amount)
      resp.subscribe(result =>{
        console.log(result)
        alert(result)
        //this.transaction=result
        // if(result==="Transaction successful"){
        //   alert(result)
        // }else{
        //   alert("PLease enter valid account number")
        // }
      })
    }
  }

}
