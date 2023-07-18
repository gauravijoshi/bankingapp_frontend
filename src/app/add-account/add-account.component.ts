import { Component, OnInit } from '@angular/core';
import { AddAccount } from '../add-account';
import { BalancecheckService } from '../balancecheck.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  addAccount: AddAccount=new AddAccount

  constructor(private service: BalancecheckService) { }
  ngOnInit(): void {
  }

  addAccounts(){
    let resp = this.service.addAccount(this.addAccount)
    resp.subscribe(result =>{
      console.log(result)
      alert(result);
    })
  }
}
