import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivComponent } from './deliv.component';

describe('DelivComponent', () => {
  let component: DelivComponent;
  let fixture: ComponentFixture<DelivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
