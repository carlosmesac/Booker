import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../profile.service';
import {Comment} from '../../books/comment.model';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.css']
})
export class ProfileDialogComponent implements OnInit {

  comment: Comment;
  userID: string;

  constructor(private profileService: ProfileService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userID = this.authService.getUID();
    this.comment = this.profileService.getComment();
    console.log(this.comment);
    console.log(this.comment.userID);
    console.log(this.userID);

  }

  onRemove(ID: string){
      this.profileService.deleteComment(ID);

    }

}

