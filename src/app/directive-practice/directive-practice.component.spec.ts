import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePracticeComponent } from './directive-practice.component';

describe('DirectivePracticeComponent', () => {
  let component: DirectivePracticeComponent;
  let fixture: ComponentFixture<DirectivePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectivePracticeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing title', () => {
    expect(component.color).toBe('wheat');
  });

  it('testing function', () => {
    expect(component.apply()).toEqual({ backgroundColor: 'wheat' });
  });

  it('testing sum function', () => {
    expect(component.sum(2, 3)).toBe(5);
  });

  it('testing html element',()=>{
    const data=fixture.nativeElement;
    expect(data.querySelector(".word").textContent).toContain("STRING")
  })
});
