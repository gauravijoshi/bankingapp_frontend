import { Component, OnInit } from '@angular/core';
import { Balance } from '../balance';
import { BalancecheckService } from '../balancecheck.service';
import { User } from '../user';

@Component({
  selector: 'app-check-balance-customer',
  templateUrl: './check-balance-customer.component.html',
  styleUrls: ['./check-balance-customer.component.css']
})
export class CheckBalanceCustomerComponent implements OnInit {

  accountNumber:any
  balance: Balance=new Balance

  constructor(private balancecheckservice: BalancecheckService) { }

  ngOnInit(): void {
  }

  public checkBalance(){
    if(this.accountNumber==null){
      alert("Please enter account number")
    }else{
      let resp = this.balancecheckservice.balanceCheckCustomer(this.accountNumber)
      resp.subscribe((data)=>{
      console.log(data)
        if(data){
          this.balance.accountBalance=data.accountBalance
        }else{
          alert("Please enter valid account number")
        }
    })
    }
    
  }


  // public checkBalance(){
  //   this.accountNumber = sessionStorage.getItem('id');
  //   let resp = this.balancecheckservice.balanceCheck(this.accountNumber)
  //   resp.subscribe((data)=>this.balance.accountBalance=data.accountBalance)
  // }

  // sessionStorage.setItem('id', data.id);
  // var data = sessionStorage.getItem('id');

}
