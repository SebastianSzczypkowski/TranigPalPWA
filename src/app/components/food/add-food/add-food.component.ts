import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FoodService} from "../../../services/food.service";

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  form:any={};
  addFoodForm!: FormGroup;
  isSuccessful = false;
  errorMessage = '';
  constructor(private formBuilder:FormBuilder,private router:Router,private foodService:FoodService) { }

  ngOnInit(): void {

    this.addFoodForm=this.formBuilder.group(
      {
        food:this.formBuilder.group(
          {
            name:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
            calories:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
            carbohydrates:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
            protein:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
            sugar:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
            fat:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
          }
        )
      }
    )
  }

  addFood():void{

    this.foodService.add(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
