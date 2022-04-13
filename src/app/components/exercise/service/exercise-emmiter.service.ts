import { Injectable,EventEmitter } from '@angular/core';
import {Subscription} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ExerciseEmmiterService {

  typeofExercise = new EventEmitter();
  subscribtion!: Subscription;

  constructor() { }

  onClick(type:number)
  {
    this.typeofExercise.emit(type);
  }

}
