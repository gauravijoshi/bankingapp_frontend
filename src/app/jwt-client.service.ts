import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {
  private userSubject: BehaviorSubject<any>;
  public globaluser!:Observable<any>;
  session_set = false;
  private myFunc: (() => void) | undefined;

  constructor(private http:HttpClient, private router: Router) { 
    localStorage.clear()
    this.userSubject = new BehaviorSubject(localStorage.getItem('token')!);
    this.globaluser= this.userSubject.asObservable();
  }

  login(userName: string, password: any) {
    return this.http
    // .post<any>("http://localhost:8090/login", { userName, password, userId})
    // .pipe(
    //   map(
    //     resp=>{
    //       if(resp)
    //       {
    //         localStorage.setItem("userInfo",JSON.stringify(resp));
    //         console.log("response"+resp)
    //         console.log("storage "+localStorage.getItem("userInfo"))
    //         this.globaluser=resp.valueOf
    //         this.userSubject.next(resp)
    //       }
    //     return resp }));
      .post<any>("http://localhost:8090/login", { userName, password},{ responseType: 'text' as 'json'})
      .pipe(
        map(
          resp=>{
            if(resp)
            {  
            localStorage.setItem("token",resp)
            console.log("response"+resp)
            console.log("storage "+localStorage.getItem("token"))
            // this.globaluser=resp.valueOf
            this.userSubject.next(resp)
            //this.session_set = true;
            console.log("session_set after login service function call"+this.session_set)
          }
          return resp}));
   }

   
   headerCall(fn: () => void) {
     this.myFunc = fn;
   }

   logout() {
    this.userSubject.next(null);
    localStorage.clear();
    this.router.navigate(['/']);
    this.session_set = false;
    console.log("session_set after logout service function call"+this.session_set)
  }
  
}
