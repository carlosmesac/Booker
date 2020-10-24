import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthComponent} from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import {BooksComponent} from './books/books.component';
import {AuthGuard} from './auth/auth.guard';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';

const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'auth', component: AuthComponent
  },
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
    canActivate: [AuthGuard], children: [
      {path:':uid',component: ProfileComponent},
      {path:':uid/edit',component: ProfileEditComponent}

    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
