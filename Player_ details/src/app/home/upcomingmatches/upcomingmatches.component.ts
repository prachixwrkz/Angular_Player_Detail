import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-upcomingmatches',
  templateUrl: './upcomingmatches.component.html',
  styleUrls: ['./upcomingmatches.component.css']
})
export class UpcomingmatchesComponent implements OnInit {

  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    this.getUpcomingMatches();
  }

  rows=[];
  temp=[];

  getUpcomingMatches(){
        this.playerService.getUpcomingMatches()
              .subscribe(resp=>{
                  console.log(resp);
                  let d:any=resp;
                  this.rows=d.data;
                  this.temp=d.data;
              })
  }

  filterMtachesByDate(date){
    //alert(date);
    console.log(new Date(date))
    let d:Date=new Date(date);
    console.log(new Date("4 August 2019"));
      console.log(this.temp);
      this.rows=this.temp
      .filter(
                    obj=>  new Date(obj.date).getDate()==d.getDate() &&  new Date(obj.date).getMonth()==d.getMonth()
               );
  }

}
