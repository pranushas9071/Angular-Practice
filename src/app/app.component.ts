import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myProject';
  fontSize = 16;
}
export interface Dog {
  breed: string;
  species: string[];
}
export interface Api {
  message: Object;
  status: String;
}
