import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FoodService} from "../../../services/food.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  addFoodForm!: FormGroup;
  isSuccessful = false;
  errorMessage = '';
  constructor(private formBuilder:FormBuilder,private router:Router,
              private foodService:FoodService,private toastr:ToastrService) { }

  ngOnInit(): void {

    this.addFoodForm=this.formBuilder.group(

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

  addFood():void{

    this.foodService.add(this.addFoodForm).subscribe(
      data => {
        this.toastr.success("Dodano posiłek","Success")
        this.isSuccessful = true;
        this.addFoodForm.reset();
      },
      err => {
        this.errorMessage = err.error.message;
        this.toastr.error("Nie udało się dodac posiłku","Error")
      }
    );
  }
}
