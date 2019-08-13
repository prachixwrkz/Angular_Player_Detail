import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginComponent } from '../autherization/login/login.component';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService  implements CanActivate{
//private auth:LoginComponent,
constructor(private authService:AuthServiceService,private router:Router) { }

  canActivate(){
    console.log("exceuting canActivate"+this.authService.isLoggedIn());
        if(this.authService.isLoggedIn())
        return true;
        else
        this.router.navigate(["auth/login"])
        return false;
  }

}
