import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public loginValid = true;
  public username = '';
  public password = '';
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  private _destroySub$ = new Subject<void>();
  private readonly returnUrl: string;
  hide: boolean =true;

  constructor(private _route: ActivatedRoute,
    private _router: Router,private authService:AuthService,private token:TokenService) {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/home';
  }

  public ngOnInit(): void {
    if(this.token.getToken()){
      this.isLoggedIn=true;
    }
  }

  public ngOnDestroy(): void {
    this._destroySub$.next();
  }

  public onSubmit(): void {
    this.loginValid = true;
    this.authService.login(this.form).subscribe(
      data => {
        this.token.saveToken(data.accessToken);
        this.token.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}
