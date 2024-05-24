import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'novidades',
    loadChildren: () => import('./novidades/novidades.module').then( m => m.NovidadesPageModule)
  },
  {
    path: 'sobre-nos',
    loadChildren: () => import('./sobre-nos/sobre-nos.module').then( m => m.SobreNosPageModule)
  },
  {
    path: 'promocoes',
    loadChildren: () => import('./promocoes/promocoes.module').then( m => m.PromocoesPageModule)
  },
  {
    path: 'recem-nascido',
    loadChildren: () => import('./recem-nascido/recem-nascido.module').then( m => m.RecemNascidoPageModule)
  },
  {
    path: 'bebe',
    loadChildren: () => import('./bebe/bebe.module').then( m => m.BebePageModule)
  },
  {
    path: 'crianca',
    loadChildren: () => import('./crianca/crianca.module').then( m => m.CriancaPageModule)
  },
  {
    path: 'mae',
    loadChildren: () => import('./mae/mae.module').then( m => m.MaePageModule)
  },
  {
    path: 'cuidados',
    loadChildren: () => import('./cuidados/cuidados.module').then( m => m.CuidadosPageModule)
  },
  {
    path: 'brinquedos',
    loadChildren: () => import('./brinquedos/brinquedos.module').then( m => m.BrinquedosPageModule)
  },
  {
    path: 'casa',
    loadChildren: () => import('./casa/casa.module').then( m => m.CasaPageModule)
  },
  {
    path: 'criar-conta',
    loadChildren: () => import('./conta/criar-conta/criar-conta.module').then( m => m.CriarContaPageModule)
  },
  {
    path: 'dados-pessoais',
    loadChildren: () => import('./conta/dados-pessoais/dados-pessoais.module').then( m => m.DadosPessoaisPageModule)
  },
  {
    path: 'enderecos',
    loadChildren: () => import('./conta/enderecos/enderecos.module').then( m => m.EnderecosPageModule)
  },
  {
    path: 'metodos-pagamento',
    loadChildren: () => import('./conta/metodos-pagamento/metodos-pagamento.module').then( m => m.MetodosPagamentoPageModule)
  },
  {
    path: 'lista-desejos',
    loadChildren: () => import('./conta/lista-desejos/lista-desejos.module').then( m => m.ListaDesejosPageModule)
  },
  {
    path: 'encomendas',
    loadChildren: () => import('./conta/encomendas/encomendas.module').then( m => m.EncomendasPageModule)
  },
  {
    path: 'devolucoes',
    loadChildren: () => import('./conta/devolucoes/devolucoes.module').then( m => m.DevolucoesPageModule)
  },
  {
    path: 'seguranca-conta',
    loadChildren: () => import('./conta/seguranca-conta/seguranca-conta.module').then( m => m.SegurancaContaPageModule)
  },
  {
    path: 'reservas',
    loadChildren: () => import('./conta/reservas/reservas.module').then( m => m.ReservasPageModule)
  },
  {
    path: 'adicionar-endereco',
    loadChildren: () => import('./conta/adicionar-endereco/adicionar-endereco.module').then( m => m.AdicionarEnderecoPageModule)
  },
  {
    path: 'pagina-produto',
    loadChildren: () => import('./pagina-produto/pagina-produto.module').then( m => m.PaginaProdutoPageModule)
  },  {
    path: 'checkout-dados',
    loadChildren: () => import('./checkout/checkout-dados/checkout-dados.module').then( m => m.CheckoutDadosPageModule)
  },
  {
    path: 'reservar',
    loadChildren: () => import('./reserva/reservar/reservar.module').then( m => m.ReservarPageModule)
  },
  {
    path: 'reserva-confirmacao',
    loadChildren: () => import('./reserva/reserva-confirmacao/reserva-confirmacao.module').then( m => m.ReservaConfirmacaoPageModule)
  },
  {
    path: 'confirmacao-encomenda',
    loadChildren: () => import('./checkout/confirmacao-encomenda/confirmacao-encomenda.module').then( m => m.ConfirmacaoEncomendaPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
