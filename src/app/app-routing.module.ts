import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from "./components/signin/signin.component";
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {ExerciseComponent} from "./components/exercise/exercise.component";
import {FoodComponent} from "./components/food/food.component";
import {AddExerciseComponent} from "./components/exercise/add-exercise/add-exercise.component";
import {AddFoodComponent} from "./components/food/add-food/add-food.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'exercise', component: ExerciseComponent },
  { path: 'add-exercise', component: AddExerciseComponent },
  { path: 'food', component: FoodComponent },
  { path: 'add-food', component: AddFoodComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
