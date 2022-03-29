import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn= false;
  constructor(private tokenStorage:TokenService) { }

  ngOnInit(): void {
    this.isLoggedIn= !!this.tokenStorage.getToken();

  }

}
