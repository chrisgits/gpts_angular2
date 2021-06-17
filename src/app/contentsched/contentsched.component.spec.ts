import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContentschedComponent } from './contentsched.component';

describe('ContentschedComponent', () => {
  let component: ContentschedComponent;
  let fixture: ComponentFixture<ContentschedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentschedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentschedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
