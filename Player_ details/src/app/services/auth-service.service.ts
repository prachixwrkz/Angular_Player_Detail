import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient,private router:Router) { }


  onSubmit(userData){
      //this.http.post("http://x-workz.mj.milesweb.cloud/v1/save",userData);
    sessionStorage.setItem("userData",JSON.stringify(userData));
  }

  onLogin(loginData):boolean{
    let userData:any=JSON.parse( sessionStorage.getItem("userData"));
    if(userData.email===loginData.email && userData.password===loginData.password){
          console.log("if service()")   
      this.loggedIn=true; 
        console.log(this.loggedIn);
         return true;
    }else{
      console.log("else service()")   
            this.loggedIn=false;
            return false;
    }
  }

  logOut(){
    sessionStorage.removeItem("userData");
    this.loggedIn=false;
    this.router.navigate(["auth/register"])

  }

  loggedIn=false;
  isLoggedIn(){
    return this.loggedIn;
  }
}
