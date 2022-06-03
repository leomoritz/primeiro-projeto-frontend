import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email: string = "";
  password: string = "";
  isRequired: boolean = false;
  passwordIsValid: boolean = true;
  regexPassword: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

  constructor() { }

  ngOnInit(): void {
  }

  validaLogin(){
    if(this.email == '' || this.password == ''){
      this.isRequired = true;
    } 
  }

}
