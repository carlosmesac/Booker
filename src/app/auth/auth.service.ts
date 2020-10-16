import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router,
              private fireAuth: AngularFireAuth) {

    this.fireAuth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.loggedIn.next(true);
      }
    });
  }


  async signUpSync(email: string, password: string): Promise<boolean> {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      this.loggedIn.next(true);
      return true;
    } catch (err) {
      console.log(err);
      this.loggedIn.next(false);
      return false;
    }
  }

  async loginSync(email: string, password: string): Promise<boolean> {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.loggedIn.next(true);
      return true;
    } catch (err) {
      console.log(err);
      this.loggedIn.next(false);
      return false;
    }
  }


  async logoutSync(): Promise<boolean> {
    try {
      await firebase.auth().signOut();
      this.loggedIn.next(false);
      return true;
    } catch (err) {
      console.log(err);
      this.loggedIn.next(true);
      return false;
    }
  }
}


// signUp(email: string, password: string) {
//   return firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, password);
// }
//
// login(email: string, password: string) {
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password).then(() => {
//     this.loggedIn.next(true);
//     this.router.navigate(['home']);
//   }).catch(errorMessage => {
//     console.log(errorMessage);
//     this.loggedIn.next(false);
//   });


// logout() {
//   return firebase.auth().signOut().then(() => {
//     this.loggedIn.next(false);
//     //this.router.navigate(['auth']);
//
//   });
// }



