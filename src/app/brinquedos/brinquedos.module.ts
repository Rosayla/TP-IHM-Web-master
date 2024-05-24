import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrinquedosPageRoutingModule } from './brinquedos-routing.module';

import { BrinquedosPage } from './brinquedos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrinquedosPageRoutingModule
  ],
  declarations: [BrinquedosPage]
})
export class BrinquedosPageModule {}
