import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DelivComponent } from './deliv.component';

describe('DelivComponent', () => {
  let component: DelivComponent;
  let fixture: ComponentFixture<DelivComponent>;

  beforeEach(waitForAsync(() => {
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
