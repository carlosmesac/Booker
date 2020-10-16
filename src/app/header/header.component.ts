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
              private changeDetector: ChangeDetectorRef,
              private router: Router) {
  }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe(value => {
      this.loggedIn = value;
    });
  }

  async onLogoutSync() {
    const success = await this.authService.logoutSync();
    if (success) {
      this.router.navigate(['auth']);
    }

  }


  // onLogout() {
  //   this.authService.logout();
  //   this.router.navigate(['auth'])
  // }
}
