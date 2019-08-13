import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    // this.http.get("https://cricapi.com/api/playerFinder?apikey=EXHF7RnajaeWCVGa3CXusv3M6W93&name=virat%20kohli")
    //       .subscribe(a=>{
    //             console.log(a);
    //       })
  }

  check(){
    this.router.navigate(["/home/player"])

  }

}
