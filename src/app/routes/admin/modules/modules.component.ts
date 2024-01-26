import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MenuModuleService } from '../_Services/MenuModule.service';
import { MenuModule } from '../_Models/MenuModule';
import { ModelDrawerService } from './model-drawer.service';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})

export class AdminModulesComponent implements OnInit, AfterViewInit {

  modules:MenuModule[]=[];
  displayedColumns: string[] = ['id','route','name','type', 'description','createdOn','actions'];
  @ViewChild('moduleDrawer') public moduleDrawer!: MatDrawer;
  selectedModuleDetails!: MenuModule;

  constructor(private menuService: MenuModuleService, private panelService: ModelDrawerService) { }

  ngOnInit(): void {
    this.getModuleDetails();
  }

  ngAfterViewInit(): void {
    this.panelService.setSidenav(this.moduleDrawer);
  }

  getModuleDetails(): void {
    this.menuService.GetAllModules().subscribe(details=>{
      this.modules = details;
    });
   }

   actionmenu(): void {
   }

   btnEditModuleDetails(Id: number)
   {
    this.menuService.GetModuleDetails(Id).subscribe(details=>{
      this.selectedModuleDetails = details;
    });
   }

   btnDeleteModuleDetails(Id: number){
    this.menuService.DeleteModuleDetails(Id).subscribe(details=>{
      this.menuService.GetAllModules().subscribe(details=>{
        this.modules = details;
      });
    });
   }

   btnCreateNewModule()
   {
    this.moduleDrawer.toggle();
   }
}
