import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  books:Book[];

  constructor(private bookservice: AjaxService) { }

  ngOnInit() {
    this.bookservice
    .getBooks()
    .subscribe((data:Book[]) => {
      this.books = data;
    });
  }
  deleteBook(id) {
    this.bookservice.deleteBook(id).subscribe(res => {
     console.log('Deleted');
   });
   window.location.reload();
  }
}
