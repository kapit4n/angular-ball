/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeamShowComponent } from './team-show.component';

describe('TeamShowComponent', () => {
  let component: TeamShowComponent;
  let fixture: ComponentFixture<TeamShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
