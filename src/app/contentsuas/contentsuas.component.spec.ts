import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContentsuasComponent } from './contentsuas.component';

describe('ContentsuasComponent', () => {
  let component: ContentsuasComponent;
  let fixture: ComponentFixture<ContentsuasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsuasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsuasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
