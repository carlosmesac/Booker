import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import {
  MatStepperModule,
  MatVerticalStepper,
} from '@angular/material/stepper';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  loginInvalid: boolean = false;
  isLoginMode: boolean = true;
  errorMessage: string = null;

  @ViewChild('stepper', { static: false }) stepper: MatVerticalStepper;

  firstSignUpGroup: FormGroup;
  secondSignUpGroup: FormGroup;
  thirdSignUpGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
    this.firstSignUpGroup = new FormGroup({
      username: new FormControl(null, Validators.required),
    });
    this.secondSignUpGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
    this.thirdSignUpGroup = new FormGroup({
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  changeMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.isLoginMode) {
      this.login();
    } else {
      this.signUp();
    }
  }

  signUp() {
    const email = this.secondSignUpGroup.get('email').value;
    const password = this.thirdSignUpGroup.get('password').value;
    this.authService
      .onSignUp(email, password)
      .then((user) => {
        console.log(user);
        this.router.navigate(['home']);
      })
      .catch((error) => {
        this.errorMessage = error.message;
        console.log(this.errorMessage);
        this.stepper.reset();
      });
  }

  login() {
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    this.authService
      .onLogin(email, password)
      .then((user) => {
        console.log(user);
        this.router.navigate(['home']);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

}
