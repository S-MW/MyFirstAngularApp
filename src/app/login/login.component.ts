import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginName = "saad!"
  age = 24;
  colors =["Blue","Red","Black"]


  showNameAndAge() {
    console.log(`Your name: ${this.loginName} , Age: ${this.age}`);
  }
}
