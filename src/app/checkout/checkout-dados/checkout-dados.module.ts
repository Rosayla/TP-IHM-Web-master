import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutDadosPageRoutingModule } from './checkout-dados-routing.module';

import { CheckoutDadosPage } from './checkout-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutDadosPageRoutingModule
  ],
  declarations: [CheckoutDadosPage]
})
export class CheckoutDadosPageModule {}
