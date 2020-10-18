import {Component, ElementRef, AfterViewInit, ViewChild} from '@angular/core';
import {fromEvent, of, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, tap, filter} from 'rxjs/operators';
import {BooksService} from './books.service';
import {Book} from './books.service';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {BookDialogComponent} from './books-dialog/book-dialog.component';
import { BooksCommentComponent } from './books-dialog/books-comment/books-comment.component';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements AfterViewInit {

  books: Book[];
  searching:boolean=false

  constructor(private booksService: BooksService, private dialog: MatDialog) {
  }

  @ViewChild('input', {static: false}) input: ElementRef;
  dialogSub: Subscription;

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    // server-side search
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        filter((e: KeyboardEvent) => e.keyCode === 13),
        distinctUntilChanged(),
        tap(async (event: KeyboardEvent) => {
          this.searching = true
          const bo: Observable<Book[]> = this.booksService.search(
            this.input.nativeElement.value
          );
          this.books = await bo.toPromise();
          console.log(this.books);
          this.booksService.setBooks(this.books);

          if(this.books){
            this.searching = false
          }
        })
      )
      .subscribe();
  }

  onClickDetail(id: number) {

    this.booksService.setCurrentID(id);
    const dialogRef = this.dialog.open(BookDialogComponent);

    this.dialogSub = dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result){
        this.dialog.open(BooksCommentComponent)
      }
    });
  }

  onClearInput() {
    this.books = [];
    this.input.nativeElement.value = '';
  }

}
