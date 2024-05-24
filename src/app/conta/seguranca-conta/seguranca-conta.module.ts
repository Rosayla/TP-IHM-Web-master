import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegurancaContaPageRoutingModule } from './seguranca-conta-routing.module';

import { SegurancaContaPage } from './seguranca-conta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegurancaContaPageRoutingModule
  ],
  declarations: [SegurancaContaPage]
})
export class SegurancaContaPageModule {}
