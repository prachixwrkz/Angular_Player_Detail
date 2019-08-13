import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AuthguardService } from './services/authguard.service';

// const routes:Route[]=[
//   {
//     path:"",
//     component:
//   }
// ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path:'auth',
        loadChildren:'./autherization/autherization.module#AutherizationModule'
      },{
        path:'home',
        loadChildren:'./home/home.module#HomeModule'
      
        
      }
    ])
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
