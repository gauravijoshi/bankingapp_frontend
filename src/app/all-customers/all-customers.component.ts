import { Component, OnInit } from '@angular/core';
import { BalancecheckService } from '../balancecheck.service';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit {

  customers:any[]= [];

  constructor(private service: BalancecheckService) { }

  ngOnInit(): void {
    this.allCustomers();
  }

  allCustomers(){
    let resp = this.service.getAllCustomers()
    resp.subscribe(result =>{
      console.log(result)
      this.customers=result;
    })
  }

}
