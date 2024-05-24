import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegurancaContaPage } from './seguranca-conta.page';

const routes: Routes = [
  {
    path: '',
    component: SegurancaContaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegurancaContaPageRoutingModule {}
