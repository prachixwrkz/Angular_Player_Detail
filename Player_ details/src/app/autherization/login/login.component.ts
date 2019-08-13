import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private authService:AuthServiceService
  ) { }

x=this.formBuilder.group({

email:['',Validators.required],
password:['',Validators.required],
})


  ngOnInit() {
  }
  onLogin(){
    console.log(this.x.value);
      if(this.authService.onLogin(this.x.value)){
        console.log("if ()")
        this.router.navigate(["home"]);
      }
     
      else
      this.router.navigate(["auth/register"]);
  }

 
}
