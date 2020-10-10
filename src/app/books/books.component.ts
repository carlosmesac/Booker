import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, filter} from 'rxjs/operators';
import { BooksService } from './books.service';
import { Book } from './books.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements AfterViewInit {

  books: Book[];


  constructor(private booksService: BooksService) {}

  @ViewChild('input', { static: false }) input: ElementRef;

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    // server-side search
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        filter((e: KeyboardEvent) => e.keyCode === 13),
        distinctUntilChanged(),
        tap(async (event: KeyboardEvent) => {
          const bo: Observable<Book[]> = this.booksService.search(
            this.input.nativeElement.value
          );
          this.books = await bo.toPromise();
          console.log(this.books);

        })
      )
      .subscribe();
  }

}
