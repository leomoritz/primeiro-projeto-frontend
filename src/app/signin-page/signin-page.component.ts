import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent implements OnInit {

 usuario: any = {
   nome: "",
   sobrenome: "",
   fazenda: "",
   email: "", 
   senha: ""
 }
 isRequired: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  validaCampos(){
    if(this.usuario.nome == '' || this.usuario.sobrenome == '' || this.usuario.fazenda == '' 
    || this.usuario.email == '' || this.usuario.senha == ''){
      this.isRequired = true;
    }
  }

}
