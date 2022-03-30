import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ExerciseService} from "../../../services/exercise.service";

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  form:any={};
  addExerciseForm!: FormGroup;
  isSuccessful = false;
  errorMessage = '';
  constructor(private formBuilder:FormBuilder,private router:Router,private exerciseService:ExerciseService) { }

  ngOnInit(): void {

    this.addExerciseForm=this.formBuilder.group(
      {
        exercise:this.formBuilder.group(
          {
            name:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
            numberOfRepitision:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
            numberOfSeries:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
            duration:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
          }
        )
      }
    )
  }

  addExercise():void{

    this.exerciseService.add(this.form).subscribe(
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
