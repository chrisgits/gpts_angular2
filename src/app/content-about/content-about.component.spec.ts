import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAboutComponent } from './content-about.component';

describe('ContentAboutComponent', () => {
  let component: ContentAboutComponent;
  let fixture: ComponentFixture<ContentAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
