import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthComponent} from './auth/auth.component';
import {ProfileComponent} from './profile/profile.component';
import {SignupComponent} from './auth/signup/signup.component';
import {BooksComponent} from './books/books.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth', component: AuthComponent, children: [
      {path: 'signup', component: SignupComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
