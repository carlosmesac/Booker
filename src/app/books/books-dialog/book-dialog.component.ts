import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book, BooksService } from '../books.service';

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.css'],
})
export class BookDialogComponent implements OnInit {
  bookDetail: Book;
  shortDescription: string;
  descriptionLength: number;
  secondPartDescription: string;

  showDescription: boolean = false;

  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.bookDetail = this.bookService.getBookByID(this.bookService.currentID);
    console.log(this.bookDetail);

    this.shortDescription = this.bookDetail.volumeInfo.description.substring(
      0,
      400
    );
    this.descriptionLength = this.bookDetail.volumeInfo.description.length;
    this.secondPartDescription = this.bookDetail.volumeInfo.description.substring(
      400,
      this.descriptionLength
    );


  }

  onPreview(previewLink: string) {
    window.open(previewLink);
  }

  onBuy(buyLink: string) {
    window.open(buyLink);
  }

  onShowDescription() {
    var dots = document.getElementById('dots');
    var moreText = document.getElementById('more');
    var btnText = document.getElementById('showDescription');

    if (dots.style.display === 'none') {
      this.showDescription = false;
      dots.style.display = 'inline';
      btnText.innerHTML = 'Read more';
      moreText.style.display = 'none';
    } else {
      this.showDescription = true;
      dots.style.display = 'none';
      btnText.innerHTML = 'Read less';
      moreText.style.display = 'inline';
    }
  }

}
