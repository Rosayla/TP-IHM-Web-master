import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaConfirmacaoPageRoutingModule } from './reserva-confirmacao-routing.module';

import { ReservaConfirmacaoPage } from './reserva-confirmacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaConfirmacaoPageRoutingModule
  ],
  declarations: [ReservaConfirmacaoPage]
})
export class ReservaConfirmacaoPageModule {}
