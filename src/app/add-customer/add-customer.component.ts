import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BalancecheckService } from '../balancecheck.service';
import { PersonalInfo } from '../personal-info';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  personalInfo: PersonalInfo=new PersonalInfo
  formGroup!: FormGroup;

  constructor(private service: BalancecheckService) { }

  ngOnInit(): void {
  }

  addCustomers(){
    let resp = this.service.addCustomer(this.personalInfo)
    resp.subscribe(result =>{
      console.log(result)
        alert(result);
    })
  }

  
}
