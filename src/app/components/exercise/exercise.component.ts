import { Component, OnInit } from '@angular/core';
import {ExerciseEmmiterService} from "./service/exercise-emmiter.service";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  typeOfExercise!: number;
  constructor(private exersiceEmmiter:ExerciseEmmiterService) { }

  ngOnInit(): void {
  }


  typeInfo(number: number) {
    this.typeOfExercise=number;
    this.exersiceEmmiter.onClick(number);
  }

}
