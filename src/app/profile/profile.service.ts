import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {Comment} from '../books/comment.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  comment: Comment;

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;



  constructor(private fireDB: AngularFireDatabase) {
    // Use snapshotChanges().map() to store the key
    this.itemsRef = fireDB.list('comments');
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
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

  setComment(comment: Comment) {
    this.comment = comment;
  }

  getComment() {
    return this.comment;
  }

  deleteComment(key: string) {
  this.itemsRef.remove(key);
}
}
