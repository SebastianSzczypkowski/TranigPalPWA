import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.css']
})
export class SearchFoodComponent implements OnInit {

  form:any={};
  searchFoodForm!: FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.searchFoodForm=this.formBuilder.group(
      {
        search:this.formBuilder.group(
          {
            name:new FormControl(),
          }
        )
      }
    )
  }

  searchFood() {

  }
}
