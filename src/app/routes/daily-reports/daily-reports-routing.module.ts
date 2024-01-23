import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BseComponent } from './bse/bse.component';
import { NseComponent } from './nse/nse.component';
import { McxComponent } from './mcx/mcx.component';

const routes: Routes = [
  {path: 'bse', component:BseComponent},
  {path: 'nse', component:NseComponent},
  {path: 'mcx', component:McxComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyReportsRoutingModule { }
