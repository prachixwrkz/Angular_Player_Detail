import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';

import { HeaderComponent } from '../common/header/header.component';
import { SiderbarComponent } from '../common/siderbar/siderbar.component';
import { PlayerComponent } from './player/player.component';
import { RouterModule } from '@angular/router';
import { PlayerstatsComponent } from './playerstats/playerstats.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { MatIconModule, MatToolbarModule, MatNativeDateModule } from '@angular/material';
import { UpcomingmatchesComponent } from './upcomingmatches/upcomingmatches.component';
import { AuthguardService } from '../services/authguard.service';
import { LoginComponent } from '../autherization/login/login.component';


@NgModule({
  declarations: [HomeComponent,HeaderComponent,SiderbarComponent, PlayerComponent, PlayerstatsComponent, UpcomingmatchesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    NgxDatatableModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule
    ],
    //providers:[AuthguardService],
   // entryComponents:[LoginComponent]
})
export class HomeModule { }
