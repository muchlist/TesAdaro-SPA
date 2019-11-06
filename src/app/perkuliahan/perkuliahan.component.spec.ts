/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerkuliahanComponent } from './perkuliahan.component';

describe('PerkuliahanComponent', () => {
  let component: PerkuliahanComponent;
  let fixture: ComponentFixture<PerkuliahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerkuliahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerkuliahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
