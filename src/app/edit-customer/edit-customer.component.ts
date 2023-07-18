import { Component, OnInit } from '@angular/core';
import { BalancecheckService } from '../balancecheck.service';
import { PersonalInfo } from '../personal-info';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  personalInfo: PersonalInfo=new PersonalInfo

  constructor(private service: BalancecheckService) { }
  ngOnInit(): void {
  }

  editCustomers(){
    let resp = this.service.editCustomer(this.personalInfo)
    resp.subscribe(result =>{
      console.log(result)
      alert(result);
    })
  }

}
