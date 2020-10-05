import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  loginInvalid: boolean = false;
  isLoginMode: boolean = true;

  firstSignUpGroup: FormGroup;
  secondSignUpGroup: FormGroup;
  thirdSignUpGroup: FormGroup;

  constructor(private route: ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
    this.firstSignUpGroup = new FormGroup({
      username: new FormControl(null, Validators.required),
    });
    this.secondSignUpGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
    this.thirdSignUpGroup = new FormGroup({
      password: new FormControl(null, Validators.required),
    });
  }
  changeMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit() {
    this.router.navigate(['home'])

  }
}
