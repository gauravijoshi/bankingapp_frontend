import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { BalancecheckService } from '../balancecheck.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  account: Account=new Account

  constructor(private service: BalancecheckService) { }

  ngOnInit(): void {
  }

  withdraw(){
    if(this.account.accountNumber==null || this.account.amount==null){
      alert("Please enter information in all the required fields")
    }else{
      let resp = this.service.withdraw(this.account.accountNumber, this.account.amount)
      resp.subscribe(result =>{
      console.log(result)
      alert(result);
    })
    }
  }

}
