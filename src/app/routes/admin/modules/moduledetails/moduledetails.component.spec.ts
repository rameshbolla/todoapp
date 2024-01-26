import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuledetailsComponent } from './moduledetails.component';

describe('ModuledetailsComponent', () => {
  let component: ModuledetailsComponent;
  let fixture: ComponentFixture<ModuledetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuledetailsComponent]
    });
    fixture = TestBed.createComponent(ModuledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
