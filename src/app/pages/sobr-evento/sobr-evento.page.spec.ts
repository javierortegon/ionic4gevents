import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrEventoPage } from './sobr-evento.page';

describe('SobrEventoPage', () => {
  let component: SobrEventoPage;
  let fixture: ComponentFixture<SobrEventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobrEventoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobrEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
