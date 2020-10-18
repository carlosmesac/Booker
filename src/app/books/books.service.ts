import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

export type Book = {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    language: string;
    authors: string[];
    publisher: string;
    categories: string[];
    publishedDate: string;
    previewLink: string;
    infoLink: string;
    industryIdentifiers: {
      type: string;
      indentifier: string;
    }[];
    description: string;
    averageRating: number;
    ratingsCount: number;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
  };
};

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: Book[] = [];
  booksChanged = new Subject<Book[]>();
  currentID: number;

  private API = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient, private authService: AuthService) {}

  search(query: string): Observable<Book[]> {
    return this.http
      .get<{ items: Book[] }>(`${this.API}?q=${query}` + '&maxResults=20')
      .pipe(map((books) => books.items || []));
  }

  getById(volumeId: string): Observable<Book> {
    return this.http.get<Book>(`${this.API}/${volumeId}`);
  }

  setBooks(books: Book[]) {
    this.books = books;
    this.booksChanged.next(this.books.slice());
  }

  getBookByID(id: number) {
    return this.books[id];
  }

  setCurrentID(id: number) {
    this.currentID = id;
  }

  getLastBook() {
    return this.getBookByID(this.currentID);
  }

  postComment(liked: boolean, comment: string) {
    console.log(    this.authService.getUID()
    );

  }
}
