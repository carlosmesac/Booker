import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { Comment } from '../books/comment.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  comment:Comment;
  constructor(private fireDB: AngularFireDatabase) {
  }

  getComments(UID: string) {
    return this.fireDB
      .list('comments', (ref) => {
        return ref.orderByChild('userID').equalTo(UID); //Filtro
      })
      .valueChanges();
  }

  getUser(UID: string) {
    return this.fireDB
      .object('users/' + UID)
      .valueChanges();

  }

  setComment(comment:Comment) {
    this.comment = comment;
  }

  getComment(){
    return this.comment;
  }
}
