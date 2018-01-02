import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsuasComponent } from './contentsuas.component';

describe('ContentsuasComponent', () => {
  let component: ContentsuasComponent;
  let fixture: ComponentFixture<ContentsuasComponent>;

  beforeEach(async(() => {
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
