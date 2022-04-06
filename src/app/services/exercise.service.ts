import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exercise} from "../model/exercise";

const AUTH_API = 'http://localhost:8080/api/exercise/';
const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})

export class ExerciseService {


  constructor(private http:HttpClient) { }

  add(exercise:any):Observable<any>{
    return this.http.post(AUTH_API+'add',{
      name:exercise.name,
       numberOfSeries:exercise.numberOfSeries,
      duration:exercise.duration,
      theNumberOfRepetitions: exercise.theNumberOfRepetitions,
    },httpOptions);
  }

  getFromToday(){
    return this.http.get<Exercise[]>(AUTH_API+'from-today')
  }
}
