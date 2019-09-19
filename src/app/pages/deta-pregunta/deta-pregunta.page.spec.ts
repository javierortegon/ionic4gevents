import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaPreguntaPage } from './deta-pregunta.page';

describe('DetaPreguntaPage', () => {
  let component: DetaPreguntaPage;
  let fixture: ComponentFixture<DetaPreguntaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaPreguntaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaPreguntaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
