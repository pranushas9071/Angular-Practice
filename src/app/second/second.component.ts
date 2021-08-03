import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  // template: `
  //   <h2>Emulated</h2>
  //   <div class="emulated-message">Emulated encapsulation</div>
  //   <app-first></app-first>
  // `,
  // styles: ['h2, .emulated-message { color: green; }'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
