import { Component, OnInit } from '@angular/core';
import { Dog } from '../app.component';
import { DogServiceService } from '../services/dog-service.service';
import { Api } from '../app.component';
// import { DOGS } from '../mock_dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
})
export class DogsComponent implements OnInit {
  dogs: Dog[] = [];
  data: Api = { message: {}, status: '' };
  // breed?: string[];
  // species?: string[];
  list?: Object;

  constructor(private dogService: DogServiceService) {}

  getDogs() {
    this.dogs = this.dogService.getDogs();
  }

  getAll() {
    this.dogService.getAll().subscribe((ret: any) => {
      console.log(ret);
      this.data = ret;
      this.list = this.data.message;
      // this.breed = Object.keys(this.data.message);
      // this.species = Object.values(this.data.message);
    });
  }

  ngOnInit(): void {
    this.getDogs();
    this.getAll();
  }
}
