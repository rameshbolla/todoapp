import { MenuModule } from './../../_Models/MenuModule';
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModelDrawerService } from '../model-drawer.service';

@Component({
  selector: 'app-moduledetails',
  templateUrl: './moduledetails.component.html',
  styleUrls: ['./moduledetails.component.scss']
})
export class ModuledetailsComponent {
  @Input() moduleDetails!: MenuModule;
  constructor(private fb: FormBuilder, private panelService: ModelDrawerService){}

  moduleForm = this.fb.nonNullable.group({
    route: [this.moduleDetails?.route, [Validators.required, Validators.maxLength(256)]],
    name: [this.moduleDetails?.name, [Validators.required, Validators.maxLength(256)]],
    type: [this.moduleDetails?.type, [Validators.required]],
    description:['', [Validators.required, Validators.maxLength(1000)]],
    displayIcon: [this.moduleDetails?.displayIcon],
    badgeColor: [this.moduleDetails?.badgeColor],
    badgeValue: [this.moduleDetails?.badgeValue],
    labelColor: [this.moduleDetails?.labelColor],
    labelValue: [this.moduleDetails?.labelColor],
    isActive: [this.moduleDetails?.isActive]
  });

  btnCloseSidePanel()
  {
    this.panelService.toggle();
  }
  btnSubmitModuleDetails()
  {
    this.panelService.toggle();
  }
}
