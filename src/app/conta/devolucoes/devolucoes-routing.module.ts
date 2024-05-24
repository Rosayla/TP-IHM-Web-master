import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevolucoesPage } from './devolucoes.page';

const routes: Routes = [
  {
    path: '',
    component: DevolucoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevolucoesPageRoutingModule {}
