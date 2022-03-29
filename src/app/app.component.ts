import { Component } from '@angular/core';
import {TokenService} from "./services/token.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TraningPal';

  public isAuthenticated = false;
  isLoggedIn= false;
  username:string="";
  constructor(private tokenStorage:TokenService)
  {
  }

  ngOnInit(): void {
    this.isLoggedIn= !!this.tokenStorage.getToken();
    if(this.isLoggedIn){
      const user = this.tokenStorage.getUser();
      this.username=user.username;
    }
  }

  public logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
