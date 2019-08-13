import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-playerstats',
  templateUrl: './playerstats.component.html',
  styleUrls: ['./playerstats.component.css']
})
export class PlayerstatsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
                private player_service:PlayerService
              ) { }

  ngOnInit() {

  //       let id=this.activatedRoute.snapshot
  //                     .queryParamMap.get("playerId");
  // console.log(id);
    let id =sessionStorage.getItem("playerId");
      console.log(id);
     this.getPlayerStatsById(id);
  }
playerInfo;
  getPlayerStatsById(playerId){
    this.player_service.getPlayerStatsById(playerId)
        .subscribe(resp=>{
            console.log(resp);
            this.playerInfo=resp;
        })
  }

  



}
