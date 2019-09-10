import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaAgendaPage } from './deta-agenda.page';

describe('DetaAgendaPage', () => {
  let component: DetaAgendaPage;
  let fixture: ComponentFixture<DetaAgendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaAgendaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
