import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenerRoutingModule } from './screener-routing.module';
import { NseComponent } from './nse/nse.component';
import { BseComponent } from './bse/bse.component';
import { McxComponent } from './mcx/mcx.component';


@NgModule({
  declarations: [
    NseComponent,
    BseComponent,
    McxComponent
  ],
  imports: [
    CommonModule,
    ScreenerRoutingModule
  ]
})
export class ScreenerModule { }
