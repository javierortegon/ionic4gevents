import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPreguntaPage } from './modal-pregunta.page';

describe('ModalPreguntaPage', () => {
  let component: ModalPreguntaPage;
  let fixture: ComponentFixture<ModalPreguntaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPreguntaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPreguntaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
