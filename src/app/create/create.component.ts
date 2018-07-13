import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AjaxService } from '../ajax.service';
// import { Book } from '../Book'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Book';
  angForm: FormGroup;
  message: Object;
  constructor(private bookservice: AjaxService, private formbuilder: FormBuilder) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.formbuilder.group({
      id: ['', Validators.required ],
      name: ['', Validators.required ],
      author: ['', Validators.required ]
   });
  }

  addBook(id, name, author) {
    // this.message = []
    this.bookservice.addBook(id, name, author).subscribe(
      message=> {this.message = message;
      console.log(this.message);
      });
}

  ngOnInit() {
  }

}
