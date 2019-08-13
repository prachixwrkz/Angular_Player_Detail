import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }

  getPlayerByName(playerName){
   return this.http.get
    ("https://cricapi.com/api/playerFinder?apikey=EXHF7RnajaeWCVGa3CXusv3M6W93&name="+playerName);
   
  }

  getPlayerStatsById(playerId){
     return  this.http.get
        ("https://cricapi.com/api/playerStats?apikey=EXHF7RnajaeWCVGa3CXusv3M6W93&pid="+playerId);
  }

  getUpcomingMatches(){
       return this.http.get("https://cricapi.com/api/matchCalendar?apikey=EXHF7RnajaeWCVGa3CXusv3M6W93");
  }
}
