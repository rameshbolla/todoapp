import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModulesComponent } from './modules/modules.component';
import { AdminFeaturesComponent } from './features/features.component';
import { AdminPagesComponent } from './pages/pages.component';

const routes: Routes = [
{ path: 'modules', component: AdminModulesComponent },
{ path: 'features', component: AdminFeaturesComponent },
{ path: 'pages', component: AdminPagesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
