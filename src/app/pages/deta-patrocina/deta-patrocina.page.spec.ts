import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaPatrocinaPage } from './deta-patrocina.page';

describe('DetaPatrocinaPage', () => {
  let component: DetaPatrocinaPage;
  let fixture: ComponentFixture<DetaPatrocinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaPatrocinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaPatrocinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
