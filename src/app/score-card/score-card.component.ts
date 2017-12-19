import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../model/courses.service';
import {Response} from '@angular/http';

export class ScoreCardHole{
  // Use meters for distance
  whiteDist:number;
  yellowDist:number;
  redDist:number;
  si:number;
  par:number;
  
  constructor(){
    this.par =4;
  }
}



@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {
  holes:ScoreCardHole[] =[];
  coursesSrv:CoursesService;
  constructor(srv:CoursesService) {
    this.coursesSrv = srv;
    //this.holes = Array<ScoreCardHole>(18);
    //this.holes.push(new ScoreCardHole())
   }

  ngOnInit() {
    //Assume 18 holes adjust latter if needed
    this.coursesSrv.getCourses()
      .subscribe(
        (data: any[]) => {
          console.log(data)
        },
        (error) => console.log(error)
      );
    for(let n=1; n <=18; n++){
      this.holes.push(new ScoreCardHole())
    }
  }

  coursePar():number {
    let par:number =0;
    for(let n=0; n < this.holes.length; n++){
      par = par + this.holes[n].par;
    }
    return par;
  }

}
