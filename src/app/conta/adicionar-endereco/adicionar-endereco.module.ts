import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarEnderecoPageRoutingModule } from './adicionar-endereco-routing.module';

import { AdicionarEnderecoPage } from './adicionar-endereco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarEnderecoPageRoutingModule
  ],
  declarations: [AdicionarEnderecoPage]
})
export class AdicionarEnderecoPageModule {}
