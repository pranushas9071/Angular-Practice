import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  profileForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    lastname: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('^\\d{10}$'),
    ]),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
    }),
  });

  //Form builder...............................................
  profileform = this.fb.group({
    firstname: [''],
    lastname: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]), // array
  });

  display = false;

  onSubmit() {
    console.log(this.profileForm.value);
    this.display = true;
  }

  //setValue...................................................................
  updateAll() {
    this.profileForm.setValue({
      firstname: 'Pranusha',
      lastname: 'S',
      email: 'abc@getMaxListeners.com',
      mobile: '9988776655',
      address: { city: 'Coimbatore', state: 'Tamil Nadu' },
    });
    console.log(`Updated values : ${this.profileForm.value}`);
  }

  //patchValue...................................................................
  updateFirstName() {
    this.profileForm.patchValue({ firstname: 'Dharani' });
    console.log(`Updated firstname : ${this.profileForm.value.firstname}`);
  }

  get aliases() {
    return this.profileform.get('aliases') as FormArray;
  }

  addAliases() {
    this.aliases.push(this.fb.control(''));
  }

  get getControl() {
    return this.profileForm.controls;
  }
  ngOnInit(): void {}
}
