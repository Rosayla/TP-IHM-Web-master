import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarEnderecoPage } from './adicionar-endereco.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarEnderecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarEnderecoPageRoutingModule {}
