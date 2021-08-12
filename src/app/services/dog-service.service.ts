import { Injectable } from '@angular/core';
import { DOGS } from '../mock_dog';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DogServiceService {
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get('https://dog.ceo/api/breeds/list/all');
  }

  getDogs() {
    return DOGS;
  }
}
