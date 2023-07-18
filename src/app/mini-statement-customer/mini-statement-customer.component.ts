import { Component, OnInit } from '@angular/core';
import { BalancecheckService } from '../balancecheck.service';
import { Transactions } from '../transactions';

@Component({
  selector: 'app-mini-statement-customer',
  templateUrl: './mini-statement-customer.component.html',
  styleUrls: ['./mini-statement-customer.component.css']
})
export class MiniStatementCustomerComponent implements OnInit {

  transactions: Transactions=new Transactions
  statement:any[]= [];
  //const result : string[] = [];

  constructor(private service: BalancecheckService) { }

  ngOnInit(): void {
  }

  miniStatement(){
    if(this.transactions.fromAccount==null){
      alert("Please enter account number")
    }else{
      let resp = this.service.miniStatementCustomer(this.transactions.fromAccount)
      resp.subscribe(result =>{
      console.log(result)
      if(result!=null){
        this.statement=result;
      }else{
        alert("Please enter valid account number")
      }
    })
    }
  }
  

}
