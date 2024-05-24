import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaConfirmacaoPage } from './reserva-confirmacao.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaConfirmacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaConfirmacaoPageRoutingModule {}
