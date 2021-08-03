import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
   // template: `
  //   <h2>ShadowDom</h2>
  //   <div class="shadow-message">Shadow DOM encapsulation</div>
  //   <app-second></app-second>
  //   <app-first></app-first>
  // `,
  // styles: ['h2, .shadow-message { color: blue; }'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ThirdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
