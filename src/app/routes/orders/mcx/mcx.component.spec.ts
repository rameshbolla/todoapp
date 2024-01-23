import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McxComponent } from './mcx.component';

describe('McxComponent', () => {
  let component: McxComponent;
  let fixture: ComponentFixture<McxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McxComponent]
    });
    fixture = TestBed.createComponent(McxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
