import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetodosPagamentoPageRoutingModule } from './metodos-pagamento-routing.module';

import { MetodosPagamentoPage } from './metodos-pagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetodosPagamentoPageRoutingModule
  ],
  declarations: [MetodosPagamentoPage]
})
export class MetodosPagamentoPageModule {}
