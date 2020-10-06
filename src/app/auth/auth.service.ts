import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  onSignUp(email: string, password: string) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)


  }

  onLogin(email: string, password: string) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)

  }

  onLogout(){
   return  firebase.auth().signOut();
  }
}
