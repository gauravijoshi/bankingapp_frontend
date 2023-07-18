import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { BalancecheckService } from '../balancecheck.service';
import { Transactions } from '../transactions';

@Component({
  selector: 'app-mini-statement',
  templateUrl: './mini-statement.component.html',
  styleUrls: ['./mini-statement.component.css']
})
export class MiniStatementComponent implements OnInit {

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
      let resp = this.service.miniStatement(this.transactions.fromAccount)
      resp.subscribe(result =>{
      console.log(result)
      this.statement=result;
    })
    }
      // if(result!=null){
      //   alert(result)
      // }else{
      //   alert(result)
      // }
  }

}
