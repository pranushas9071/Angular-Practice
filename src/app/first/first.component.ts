import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  // template: `
  //   <h2>None</h2>
  //   <div class="none-message">No encapsulation</div>
  // `,
  // styles: ['h2, .none-message { color: red; }'],
  encapsulation: ViewEncapsulation.None,
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
