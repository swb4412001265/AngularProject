import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  url:string = 'http://localhost:4000/books';  
  
  constructor(private http: HttpClient) { }

  getBooks(){
    // API to return all users
    return this
            .http
            .get(this.url);
}

  addBook(id:number, name:string, author:string) {
    let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json'
   }); 
    let option = {
       headers: httpHeaders
   }
    const book = {
        id: id,  
        name: name,
        author: author
    };

    return this.http.post(this.url, book, option);
        // .subscribe(books => console.log(books));
  }

  editBook(id) {
    return this
          .http
          .get(`${this.url}/${id}`)
    }
  
  updateBook(id, name, author) {

    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    }); 
    let option = {
     headers: httpHeaders
    }
    const book = {
      id: id,
      name: name,
      author: author
    };

    return this
       .http
       .put(`${this.url}/${id}`, book, option)
       .subscribe(res =>console.log("Done") );
    }
    
    deleteBook(id) {
  		return this
            .http
            .delete(`${this.url}/${id}`)
  	}
}
