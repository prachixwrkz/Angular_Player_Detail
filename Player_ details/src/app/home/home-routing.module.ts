import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Router} from '@angular/router';
import { HomeComponent } from './home.component';
import { PlayerComponent } from './player/player.component';
import { PlayerstatsComponent } from './playerstats/playerstats.component';
import { UpcomingmatchesComponent } from './upcomingmatches/upcomingmatches.component';
import { AuthguardService } from '../services/authguard.service';

@NgModule({
      imports:[
        CommonModule,
        RouterModule.forChild([
          {
            path:'',
            component:HomeComponent,
            //canActivate:[AuthguardService],
            children:[
              {
                  path:'player',
                  component:PlayerComponent 
              },{
                path:'playerstats',
                component:PlayerstatsComponent
              },{
                path:'upcomingmatches',
                component:UpcomingmatchesComponent
              }
            ]
          }
        ])
      ]
})

export class HomeRoutingModule { }

