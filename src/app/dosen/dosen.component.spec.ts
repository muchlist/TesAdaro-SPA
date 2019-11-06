/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DosenComponent } from './dosen.component';

describe('DosenComponent', () => {
  let component: DosenComponent;
  let fixture: ComponentFixture<DosenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
