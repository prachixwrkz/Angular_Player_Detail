import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
                private router:Router,
                private formBuilder:FormBuilder,
                private auth_service:AuthServiceService
              ) { }

  x=this.formBuilder.group({
    name:['',Validators.required],
    email:['',Validators.required],
    phoneNumber:['',Validators.required],
    country:['',Validators.required],
    password:['',Validators.required],
  })

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.x.value);
    this.auth_service.onSubmit(this.x.value);
    this.router.navigate(['auth/login'])
  }
}
