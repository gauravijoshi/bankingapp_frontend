import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { JwtClientService } from '../jwt-client.service';
import { User } from '../user';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

 
    formGroup!: FormGroup;
    user: User=new User

    response: any;
    str:string=''
    item:any

  constructor(private service:JwtClientService, private router:Router) { }

  ngOnInit(): void {
  }

  loginProcess(){
      this.service.session_set=true;
      localStorage.clear()
      console.log(this.user)
      this.service.login(this.user.userName, this.user.password).subscribe(result =>{
        // this.item  = JSON.parse(localStorage.getItem('token')!)
        // if(this.item.user.role==="MANAGER"){
        //   this.router.navigate(['/home']);
        // }else if(this.item.user.role==="CUSTOMER"){
        //     this.router.navigate(['/customer-home'])
        // }else{
        //     alert("Invalid username or password")
        // }
        this.str= result.substring(0,8)
        if(this.str==="MANAGER-"){
          this.router.navigate(['/home']);
        }else if(this.str==="CUSTOMER"){
          this.router.navigate(['/customer-home'])
        }
        else{
          alert(result)
        }
      })
  }

  

}
