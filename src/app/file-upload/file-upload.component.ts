import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private uploadService: FileUploadService
  ) {}

  userProfile = this.fb.group({
    name: [''],
    file: [''],
  });
  file?: File;

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.userProfile.value.name);
    if (this.file) formData.append('file', this.file);
    this.uploadService.upload(formData).subscribe((result: any) => {
      console.log(result);
    });
  }

  ngOnInit(): void {}
}
