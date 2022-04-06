import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token.service";
import {ExerciseService} from "../../services/exercise.service";
import {Exercise} from "../../model/exercise";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn= false;
  exercise :Exercise[]=[];
  displayedColumns: string[] = ['id', 'name', 'numberOfSeries', 'theNumberOfRepetitions'];
  constructor(private tokenStorage:TokenService,private exerciseService:ExerciseService) { }

  ngOnInit(): void {
    this.isLoggedIn= !!this.tokenStorage.getToken();
    this.exerciseService.getFromToday().subscribe(
      data=>{
        this.exercise=data;
      }
    );
  }

}
