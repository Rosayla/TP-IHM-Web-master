import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutDadosPage } from './checkout-dados.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutDadosPageRoutingModule {}
