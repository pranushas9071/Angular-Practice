import { Injectable } from '@angular/core';
import { DOGS } from '../mock_dog';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DogServiceService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:8080/dog/addBreed';
  getAll() {
    return this.http.get('https://dog.ceo/api/breeds/list/all');
  }

  getDogs() {
    return DOGS;
  }

  listDogMyAPI() {
    return this.http.get('http://localhost:8080/dog/getAll');
  }

  listSpecies(breed: string) {
    // return this.http.get('http://localhost:8080/dog/getSpecies',{params:param1});
    return this.http.get(`http://localhost:8080/dog/getSpecies?breed=${breed}`);
  }

  addBreed(data: Object) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.post('http://localhost:8080/dog/addBreed', data, {
      headers: httpHeaders,
      responseType: 'text',
    });
  }

  addSpecies(breed: string, data: Object) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.put(
      `http://localhost:8080/dog/addSpecies?breed=${breed}`,
      data,
      { headers: httpHeaders, responseType: 'text' }
    );
  }

  deleteBreed(breed: string) {
    return this.http.delete(
      `http://localhost:8080/dog/deleteBreed?breed=${breed}`,
      { responseType: 'text' }
    );
  }

  deleteSpecies(breed: string, species: string) {
    return this.http.delete(
      `http://localhost:8080/dog/deleteSpecies?breed=${breed}&species=${species}`,
      { responseType: 'text' }
    );
  }
}
