import { Component, OnInit } from '@angular/core';
import { Dog } from '../app.component';
import { DogServiceService } from '../services/dog-service.service';
import { Api } from '../app.component';
import {
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupName,
} from '@angular/forms';
import { HttpParams } from '@angular/common/http';

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
  allDogs: Dog[] = [];
  species?: any;

  constructor(private dogService: DogServiceService) {}

  getSpeciesForm = new FormGroup({
    breed: new FormControl(''),
  });

  addingBreedForm = new FormGroup({
    breed: new FormControl(''),
  });

  addingSpeciesForm = new FormGroup({
    breed: new FormControl(''),
    species: new FormControl(['']),
  });

  deletingBreedForm = new FormGroup({
    breed: new FormControl(''),
  });

  deletingSpeciesForm = new FormGroup({
    breed: new FormControl(''),
    species: new FormControl(''),
  });

  getDogs() {
    this.dogs = this.dogService.getDogs();
    console.log(this.dogs);
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

  listDogMyAPI() {
    this.dogService.listDogMyAPI().subscribe((ret: any) => {
      console.log(ret);
      this.allDogs = ret;
    });
  }

  // params = new HttpParams();
  display = false;
  addBreedResult = false;
  displayAl = false;
  addSpeciesResult = false;
  deleteBreedResult = false;
  deleteSpeciesResult = false;

  displayAll() {
    this.listDogMyAPI();
    this.displayAl = true;
  }

  onSubmit() {
    console.log(this.getSpeciesForm.value.breed);
    // this.params.set('breed', this.getSpeciesForm.value.breed);
    this.dogService
      .listSpecies(this.getSpeciesForm.value.breed)
      .subscribe((ret: any) => {
        console.log(ret);
        this.species = ret;
        this.display = true;
      });
  }

  createBreed() {
    const data = { breed: this.addingBreedForm.value.breed };
    console.log(data);
    this.dogService.addBreed(data).subscribe((ret: any) => {
      console.log(ret);
    });
    this.addBreedResult = true;
  }

  addSpecies() {
    const data = { species: [this.addingSpeciesForm.value.species] };
    console.log(data);
    this.dogService
      .addSpecies(this.addingSpeciesForm.value.breed, data)
      .subscribe((ret: any) => {
        console.log(ret);
      });
    this.addSpeciesResult = true;
  }

  deleteBreed() {
    this.dogService
      .deleteBreed(this.deletingBreedForm.value.breed)
      .subscribe((ret: any) => {
        console.log(ret);
      });
    this.deleteBreedResult = true;
  }

  deleteSpecies() {
    this.dogService
      .deleteSpecies(
        this.deletingSpeciesForm.value.breed,
        this.deletingSpeciesForm.value.species
      )
      .subscribe((ret: any) => {
        console.log(ret);
      });
    this.deleteSpeciesResult = true;
  }

  ngOnInit(): void {
    this.getDogs();
    this.getAll();
  }
}
