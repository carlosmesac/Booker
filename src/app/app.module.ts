import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedComponent } from './shared/shared.component';
import { SignupComponent } from './auth/signup/signup.component';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BooksComponent } from './books/books.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { firebaseConfig } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire';





@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    SharedComponent,
    SignupComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
