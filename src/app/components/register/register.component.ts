import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  User: any = ['casual', 'intermediate', 'advanced','personal trainer','dietitian'];

  constructor() { }

  ngOnInit(): void {
  }

}
