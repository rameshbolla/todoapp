import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPagesComponent } from './pages.component';

describe('AdminPagesComponent', () => {
  let component: AdminPagesComponent;
  let fixture: ComponentFixture<AdminPagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
