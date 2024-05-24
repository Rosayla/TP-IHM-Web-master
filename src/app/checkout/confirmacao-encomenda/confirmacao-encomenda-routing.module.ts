import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacaoEncomendaPage } from './confirmacao-encomenda.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacaoEncomendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacaoEncomendaPageRoutingModule {}
