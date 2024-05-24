import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-dados',
  templateUrl: './checkout-dados.page.html',
  styleUrls: ['./checkout-dados.page.scss'],
})
export class CheckoutDadosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  abrirLoja() {
    document.getElementById('entregaLoja').style.display = "block"
    document.getElementById('entregaCasa').style.display = "none"
  }

  abrirCasa() {
    document.getElementById('entregaLoja').style.display = "none"
    document.getElementById('entregaCasa').style.display = "block"
  }

}
