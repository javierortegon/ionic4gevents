import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaAsistentePage } from './deta-asistente.page';

describe('DetaAsistentePage', () => {
  let component: DetaAsistentePage;
  let fixture: ComponentFixture<DetaAsistentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaAsistentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaAsistentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
