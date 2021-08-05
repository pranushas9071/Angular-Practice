import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-template-practice',
  templateUrl: './template-practice.component.html',
  styleUrls: ['./template-practice.component.css'],
})
export class TemplatePracticeComponent implements OnInit {
  @Input() size!: number;
  @Output() sizeChange = new EventEmitter<number>();
  birthday = new Date(1999, 9, 17); // ----------->  month from zero
  name = 'Pranusha';
  aName = 'Dharani';
  amount = 1234567;
  number1 = 12.345678;
  number2 = 0.259;
  number3 = 1.3495;
  holder = 'Enter your name';
  color = 'thistle';
  bgcolor = 'cornflowerblue';
  multiStyles = 'background-color: yellow;font-weight:bold;';
  multiStylesObj = {
    backgroundColor: 'tan',
    padding: '5px',
  };
  applyStyle = true;
  myClasses = 'class1 class2';

  toggle = true;
  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }
  toggleFormat() {
    this.toggle = !this.toggle;
  }
  change(input: { value: string }) {
    input.value = 'Aspirian';
  }

  dec(): void {
    this.resize(-1);
  }
  inc() {
    this.resize(1);
  }
  resize(val: number) {
    this.size=this.size+val
    this.sizeChange.emit(this.size);
  }
  constructor() {}

  ngOnInit(): void {}
}
