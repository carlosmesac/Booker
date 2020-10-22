import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private fireDB: AngularFireDatabase) {}

  getComments(UID: string) {
    return this.fireDB
      .list('comments', (ref) => {
        return ref.orderByChild('userID').equalTo(UID); //Filtro
      })
      .valueChanges();
  }
}
