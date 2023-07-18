import { Component, OnInit } from '@angular/core';
import { BalancecheckService } from '../balancecheck.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  accountNumber: any

  constructor(private service: BalancecheckService) { }

  ngOnInit(): void {
  }

  inactive(){
    let resp = this.service.deleteAccount(this.accountNumber)
    resp.subscribe(result =>{
      console.log(result)
      alert(result);
    }),console.error("error");
    
  }
}
