import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminModulesComponent } from './modules/modules.component';
import { AdminFeaturesComponent } from './features/features.component';
import { AdminPagesComponent } from './pages/pages.component';
import { ModuledetailsComponent } from './modules/moduledetails/moduledetails.component';

const COMPONENTS: any[] = [
  AdminModulesComponent,
  AdminFeaturesComponent,
  AdminPagesComponent,
  ModuledetailsComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class AdminModule { }
