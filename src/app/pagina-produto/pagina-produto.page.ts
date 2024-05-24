import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.page.html',
  styleUrls: ['./pagina-produto.page.scss'],
})
export class PaginaProdutoPage implements OnInit {
  
  public infoProduto: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) { 
   
    this.rotaAtiva.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.infoProduto = this.router.getCurrentNavigation().extras.state.dadosProduto;
      }
    })


  }
  ngOnInit() {
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
