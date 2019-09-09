import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaStandPage } from './deta-stand.page';

describe('DetaStandPage', () => {
  let component: DetaStandPage;
  let fixture: ComponentFixture<DetaStandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaStandPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaStandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
