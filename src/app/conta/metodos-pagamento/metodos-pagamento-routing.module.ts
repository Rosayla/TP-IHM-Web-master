import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetodosPagamentoPage } from './metodos-pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: MetodosPagamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetodosPagamentoPageRoutingModule {}
