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
  isAuth = false;
  isAuthMessage = this.isAuth ? "logout" : "login";


  showNameAndAge() {
    console.log(`Your name: ${this.loginName} , Age: ${this.age}`);
  }

  printColor(picked :String)
  {
    console.log("You are choose :" + picked);
  }

  changeAuth()
  {
    this.isAuth = ! this.isAuth;
    this.isAuthMessage = this.isAuth ? "logout" : "login";
  }
}
