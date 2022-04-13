import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ExerciseService} from "../../../services/exercise.service";
import {ToastrService} from "ngx-toastr";
import {ExerciseEmmiterService} from "../service/exercise-emmiter.service";

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  addExerciseForm!: FormGroup;
  isSuccessful = false;
  errorMessage = '';
  checkIfWeight:boolean =false;
  type!:number;
  constructor(private formBuilder:FormBuilder,private router:Router,
              private exerciseService:ExerciseService,private toastr:ToastrService,
              private exerciseEmmiter:ExerciseEmmiterService) { }

  ngOnInit(): void {

    this.addExerciseForm=this.formBuilder.group(
      // {
      //   exercise:this.formBuilder.group(
          {
            name:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
            theNumberOfRepetitions:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
            numberOfSeries:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
            duration:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
            weight:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
        //   }
        // )
      }
    )
    //TODO zmiana pól formularz przy różnych typach ćwiczeń
    if(this.exerciseEmmiter.subscribtion==undefined)
    {
      this.exerciseEmmiter.subscribtion=this.exerciseEmmiter.typeofExercise.subscribe(
        (type:number)=>
        {
          this.type=type;
        }

      )
    }

  }

  addExercise():void{


    this.exerciseService.add(this.addExerciseForm).subscribe(
      data => {
        this.isSuccessful = true;
        this.toastr.success("Dodano ćwiczenie", "Success");
        this.addExerciseForm.reset();
        this.addExerciseForm.clearValidators();
      },
      err => {
        this.errorMessage = err.error.message;
        this.toastr.error("Nie udało się dodac ćwiczenia","Error");
      }


    );


  }
}
