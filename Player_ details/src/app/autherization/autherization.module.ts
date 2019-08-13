import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AuthRoutingModule} from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';

@NgModule({
  declarations: [
                  LoginComponent, 
                  RegisterComponent
                ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  //providers:[AuthServiceService]
})
export class AutherizationModule { }
