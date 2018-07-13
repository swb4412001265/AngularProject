import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AjaxService } from '../ajax.service';
import { Book } from '../Book';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  book: any = {};
  angForm: FormGroup;
  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private service: AjaxService, 
              private formbuilder: FormBuilder) { 
      this.createForm();
  }

  createForm() {
    this.angForm = this.formbuilder.group({
      id: ['', Validators.required ],
      name: ['', Validators.required ],
      author: ['', Validators.required ]
   });
  }

  updateBook(id, name, author) {
    this.route.params.subscribe(params => {
    this.service.updateBook(params['id'], name, author);
    this.router.navigate(['index']);
    });
    window.location.reload();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
     this.service.editBook(params['id']).subscribe(book => {
        this.book = book;
    });
  });
  }


}
