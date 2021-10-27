import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private http: HttpClient) {}

  upload(data: any) {
    return this.http.post('http://localhost:8080/user/upload', data);
  }
}
