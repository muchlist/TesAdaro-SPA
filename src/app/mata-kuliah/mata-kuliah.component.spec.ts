/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MataKuliahComponent } from './mata-kuliah.component';

describe('MataKuliahComponent', () => {
  let component: MataKuliahComponent;
  let fixture: ComponentFixture<MataKuliahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MataKuliahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MataKuliahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
