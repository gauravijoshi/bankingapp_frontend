import { Component, OnInit } from '@angular/core';
import { BalancecheckService } from '../balancecheck.service';
import { EditAccount } from '../edit-account';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

  editAccount: EditAccount=new EditAccount

  constructor(private service: BalancecheckService) { }
  ngOnInit(): void {
  }

  editAccounts(){
    let resp = this.service.editAccount(this.editAccount)
    resp.subscribe(result =>{
      console.log(result)
      alert(result);
    })
  }

}
