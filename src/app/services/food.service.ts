import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


const AUTH_API = 'http://localhost:8080/api/food/';
const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  add(food:any):Observable<any>{
    return this.http.post(AUTH_API+'add',{
      name:food.name,
      calories:food.calories,
      carbohydrates:food.carbohydrates,
      protein:food.protein,
      sugar:food.sugar,
      fat:food.fat,
    },httpOptions);
  }
}
