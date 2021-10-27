import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidatorService } from '../services/validator.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  displaySuccessRegistration = false;

  constructor(
    private fb: FormBuilder,
    private customValidator: ValidatorService
  ) {}

  // userProfile = new FormGroup({
  //   username: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(8),
  //   ]),
  //   email: new FormControl('', [Validators.email, Validators.required]),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(8),
  //   ]),
  //   confirmPassword: new FormControl('', [Validators.required]),
  // });

  userProfile = this.fb.group(
    {
      username: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validator: this.customValidator.passwordValidator(
        'password',
        'confirmPassword'
      ),
    }
  );

  onSubmit() {
    console.log(this.userProfile.value);
    this.displaySuccessRegistration = true;
  }

  get getControl() {
    return this.userProfile.controls;
  }

  ngOnInit(): void {}
}
