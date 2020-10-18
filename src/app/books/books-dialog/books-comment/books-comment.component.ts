import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-books-comment',
  templateUrl: './books-comment.component.html',
  styleUrls: ['./books-comment.component.css']
})
export class BooksCommentComponent implements OnInit {

  liked:boolean = null
  f:FormGroup
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  comment:string
  colorLike:string="basic"
  colorDislike:string="basic"
  constructor(private booksService: BooksService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.f = new FormGroup({
      comment:new FormControl('', [Validators.required,Validators.maxLength(240)])
    })
    this.comment = this.f.get('comment').value
  }

  onClickDislike(){
    this.liked = false
    this.colorLike="basic"
    this.colorDislike="warn"
  }
  onClickLike(){
    this.liked = true
    this.colorLike="primary"
    this.colorDislike="basic"
  }
  onSubmit(){

  }
}
