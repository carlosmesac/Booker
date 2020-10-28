import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../profile.service';
import {Comment} from '../../books/comment.model';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.css']
})
export class ProfileDialogComponent implements OnInit {

  comment: Comment;

  constructor(private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.comment = this.profileService.getComment();
  }

}

