import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { JwtClientService } from '../jwt-client.service';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:JwtClientService, private router: Router) { }

  isLoggedIn = false;

  ngOnInit(): void {
    this.service.headerCall(this.loggedIn.bind(this))
  }

  loggedIn(){
    console.log("session_set in header init func"+this.service.session_set)
    if(this.service.session_set===true){
      this.isLoggedIn=true;
      console.log("isLoggedIn"+this.isLoggedIn)
    }else{
      this.isLoggedIn=false;
      console.log("isLoggedIn"+this.isLoggedIn)
    }
  }

  logout(){
      this.service.logout();
  }

}
