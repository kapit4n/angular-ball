/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GoalAddComponent } from './goal-add.component';

describe('GoalAddComponent', () => {
  let component: GoalAddComponent;
  let fixture: ComponentFixture<GoalAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
