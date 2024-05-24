import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacaoEncomendaPageRoutingModule } from './confirmacao-encomenda-routing.module';

import { ConfirmacaoEncomendaPage } from './confirmacao-encomenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacaoEncomendaPageRoutingModule
  ],
  declarations: [ConfirmacaoEncomendaPage]
})
export class ConfirmacaoEncomendaPageModule {}
