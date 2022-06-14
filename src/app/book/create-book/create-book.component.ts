import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  constructor(public service:BookService) { }

  ngOnInit(): void {
  }

  createBook = new FormGroup({
    name : new FormControl(""),
    price : new FormControl(""),
  })

  formSubmitFunction()
  {
    this.service.saveBook(this.createBook.value) 
  }

}
