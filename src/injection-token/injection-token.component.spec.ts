/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InjectionTokenComponent } from './injection-token.component';

describe('InjectionTokenComponent', () => {
  let component: InjectionTokenComponent;
  let fixture: ComponentFixture<InjectionTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectionTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
