import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CanComponentLeave } from '../unsaved-changes.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements CanComponentLeave {
  username: FormControl = new FormControl();

  constructor() {}

  canLeave() {
    if (this.username.dirty)
      return window.confirm(
        'You have some unsaved changes.Are you sure you want to leave?'
      );
    else return true;
  }
}
