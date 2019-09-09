import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencistasPage } from './conferencistas.page';

describe('ConferencistasPage', () => {
  let component: ConferencistasPage;
  let fixture: ComponentFixture<ConferencistasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferencistasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencistasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
