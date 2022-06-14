import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  myForm = new FormGroup({
    id : new FormControl(""),
    name : new FormControl(""),
    age : new FormControl(""),
  })

  ngOnInit(): void {
  }

  formSubmitFunction() {
    console.log(this.myForm.value);
    
  }

}
