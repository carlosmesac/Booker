import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = false;

  constructor(private authService: AuthService,
              private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe(value => {
      this.loggedIn = value;
      this.changeDetector.detectChanges();
      console.log(value);
    });
  }

  onLogout() {
    this.authService.logout();
  }
}
