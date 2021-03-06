import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../model/book.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = "https://62a83fa8a89585c1770fb721.mockapi.io/api/v1/books"
  books:Book[] = [];
  // bbb:any[]= [];

  constructor(private http:HttpClient,public router: Router) { }

  getAllBooks()
  {
    this.http.get(this.url).subscribe(res=>{
      console.log(res);
      
      this.books = res as Book[];      
      // this.bbb = res as any[];  // This approach will work also
    });
  }

  saveBook(value: Book) 
  {
    this.http.post(this.url,value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/books'])
    })
  }

  deleteBook(bookId: any) {
    this.http.delete(this.url + `/${bookId}`).subscribe(res=>{
      this.getAllBooks();
    })


  }

  showBookTest:any;

  showBook(bookId: string) {
    this.http.get(this.url + `/${bookId}`).subscribe(res=>{
      console.log(res);

      this.showBookTest = res as any; 

      alert('name: ' + this.showBookTest.name + '.  price:' + this.showBookTest.price )
      
    })
  }


}
