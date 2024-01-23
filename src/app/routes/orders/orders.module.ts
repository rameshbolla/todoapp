import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
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
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
