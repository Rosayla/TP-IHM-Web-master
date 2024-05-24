import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  verificarDados(username: string, password: string) {

    console.log(username, password);
    

    if(username === "aluno" && password === "123") {
      document.getElementById('menuLogin').style.display = "block"
      document.getElementById('menu').style.display = "none"
    }
    else {
      window.alert("Username ou palavra-passe errados.")
    }

  }

  logout() {
    document.getElementById('menuLogin').style.display = "none"
    document.getElementById('menu').style.display = ""
  }

  abrirCesto() {
    document.getElementById('cesto').style.display = "block"
    document.getElementById('cesto-left').style.display = "block"
  }

  fecharCesto() {
    document.getElementById('cesto').style.display = "none"
    document.getElementById('cesto-left').style.display = "none"
  }
}
