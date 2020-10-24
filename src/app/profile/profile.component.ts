import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../auth/user.model';
import { ProfileService } from './profile.service';
import { Comment } from '../books/comment.model';
import { query } from '@angular/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  uid: string;
  userProfile: User = new User();
  userComments: Comment[] = [];

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.uid = params['uid'];
      this.profileService
        .getComments(this.uid)
        .subscribe((comments: Comment[]) => {
          this.userComments = comments;
          console.log(this.userComments);

        });

    });
    this.profileService.getUser(this.uid).subscribe((user:User)=>{
      this.userProfile=user
      console.log(this.userProfile);

    })
  }
}
