import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PlayerstatsComponent } from '../playerstats/playerstats.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(private  dialog:MatDialog,private player_service:PlayerService,private router:Router) { }

  ngOnInit() {
    console.log("entered");
  }
player;
rows=[];
  searchPlayer(playerName){
    this.player_service.getPlayerByName(playerName)
    .subscribe(resp=>{
     
      let d:any=resp
      this.player=d.data;
      this.rows=d.data;
      console.log(this.player);
    },err=>{
      console.log(err);
    })
  }

  getPlayerDeatails(playerId){
     this.router.navigate(["/home/playerstats"],{queryParams:{"playerId":playerId}})
  }


  openModal(playerId){
        sessionStorage.setItem("playerId",playerId);
        this.dialog.open(PlayerstatsComponent);

  }
}
