import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { BalancecheckService } from '../balancecheck.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  account: Account=new Account

  constructor(private service: BalancecheckService) { }

  ngOnInit(): void {
  }

  deposit(){
    
      if(this.account.accountNumber==null || this.account.amount==null){
        alert("Please enter information in all the required fields")
      }else{
        let resp = this.service.deposit(this.account.accountNumber, this.account.amount)
        resp.subscribe(result =>{
        console.log(result)
        alert(result);
      })
    }
  }

}
