import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Book, BooksService} from '../books.service';

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.css']
})
export class BookDialogComponent implements OnInit {

  bookDetail: Book;

  constructor(private bookService: BooksService) {
  }

  ngOnInit(): void {
    this.bookDetail = this.bookService.getBookByID(this.bookService.currentID);
    console.log(this.bookDetail);
  }

  onPreview(previewLink: string){
 window.open(previewLink);
  }

  onBuy(buyLink: string){
    window.open(buyLink);

  }
}
