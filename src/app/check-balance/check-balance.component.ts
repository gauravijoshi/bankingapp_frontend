import { Component, OnInit } from '@angular/core';
import { Balance } from '../balance';
import { BalancecheckService } from '../balancecheck.service';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})
export class CheckBalanceComponent implements OnInit {

  accountNumber:any
  balance: Balance=new Balance

  constructor(private balancecheckservice: BalancecheckService) { }

  ngOnInit(): void {
  }

  public checkBalance(){
    if(this.accountNumber==null){
      alert("Please enter account number")
    }else{
      let resp = this.balancecheckservice.balanceCheck(this.accountNumber);
      resp.subscribe((data)=>{
        if(JSON.stringify(data)==="Please enter valid account number"){
          alert("Please enter valid account number")
        }else if(JSON.stringify(data)==="Provided account number is currently inactive"){
          alert("Provided account number is currently inactive")
        }else{
          this.balance.accountBalance=data.accountBalance;   
        }
      });
      }
    
  }

}
