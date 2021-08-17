import { ComponentFixture, TestBed } from '@angular/core/testing';


import { TemplatePracticeComponent } from './template-practice.component';
import {MyPipe} from '../myPipe.pipe'

describe('TemplatePracticeComponent', () => {
  let component: TemplatePracticeComponent;
  let fixture: ComponentFixture<TemplatePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatePracticeComponent,MyPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
