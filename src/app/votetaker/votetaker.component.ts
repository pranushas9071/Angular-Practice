import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.css'],
})
export class VotetakerComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = ['voter A', 'voter B', 'voter C'];
  // itemImageUrl2 = '';

  // title!: FormControl;
  // myForm!: FormGroup;

  onVoted(agreed: boolean) {
    if (agreed) this.agreed++;
    else this.disagreed++;
  }

  // getVal(){
  //   return "A function"
  // }

  // changeInput(input: { value: string; focus: () => void; }): void{
  //   input.value="Pranusha";
  //   input.focus();
  // }

  constructor() {}
  ngOnInit(): void {
    // this.title = new FormControl('', [Validators.required, Validators.minLength(10)]);
    // this.myForm = new FormGroup({
    //   'title': this.title
    // });
  }
}
