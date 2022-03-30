import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

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
      numberOfRepitision:exercise.numberOfRepitision,
      numberOfSeries:exercise.numberOfSeries,
      duration:exercise.duration,
    },httpOptions);
  }
}
