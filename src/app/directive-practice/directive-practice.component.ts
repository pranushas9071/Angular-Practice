import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css'],
})
export class DirectivePracticeComponent implements OnInit {
  color = 'wheat';
  result = true;
  fruit = '';
  constructor() {}
  apply() {
    return { backgroundColor: this.color };
  }
  change(color: string) {
    this.color = color;
  }
  diff() {
    this.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`;
  }
  useNgIf() {
    this.result = !this.result;
  }
  sum(a:number,b:number){
    return a+b;
  }
  ngOnInit(): void {
    console.log(this.fruit);
  }
}
