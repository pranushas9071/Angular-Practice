import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePracticeComponent } from './directive-practice.component';

describe('DirectivePracticeComponent', () => {
  let component: DirectivePracticeComponent;
  let fixture: ComponentFixture<DirectivePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivePracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
