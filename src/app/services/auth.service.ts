import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isUserLoggedIn() {
    const p = window.prompt('Enter the password');
    if (p == '1234') return true;
    else return false;
  }
}
