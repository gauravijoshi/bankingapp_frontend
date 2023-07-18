import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { BalancecheckService } from '../balancecheck.service';
import { Transactions } from '../transactions';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {

  transaction: Transactions=new Transactions
  account: Account=new Account

  constructor(private service: BalancecheckService) { }

  ngOnInit(): void {
  }

  fundTransfer(){
    if(this.transaction.fromAccount==null || this.transaction.toAccount==null || this.transaction.amount==null){
      alert("Please provide required information in all feilds")
    }else{
      let resp = this.service.fundTransafer(this.transaction.fromAccount, this.transaction.toAccount, this.transaction.amount)
      resp.subscribe(result =>{
      console.log(result)
      alert(result)
    })
    }
  }

}
