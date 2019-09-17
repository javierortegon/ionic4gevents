import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaDocumentoPage } from './deta-documento.page';

describe('DetaDocumentoPage', () => {
  let component: DetaDocumentoPage;
  let fixture: ComponentFixture<DetaDocumentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaDocumentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaDocumentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
