import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BseComponent } from './bse.component';

describe('BseComponent', () => {
  let component: BseComponent;
  let fixture: ComponentFixture<BseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BseComponent]
    });
    fixture = TestBed.createComponent(BseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
