import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { BooksService } from './books.service';
import { Book } from './books.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements AfterViewInit {
  constructor(private booksService: BooksService) {}

  @ViewChild('input', { static: false }) input: ElementRef;

  ngAfterViewInit() {
    // server-side search
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(async (event: KeyboardEvent) => {
          const bo: Observable<Book[]> = this.booksService.search(
            this.input.nativeElement.value
          );

          const books: Book[] = await bo.toPromise();
          const bookid = books[0].id;
          console.log(`all books: ${books}`);

          const book = await this.booksService.getById(bookid).toPromise();
          console.log(`book: ${JSON.stringify(book)}`);
        })
      )
      .subscribe();
  }
}
