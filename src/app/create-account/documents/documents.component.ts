import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent {
  constructor() {}

  isFileUploaded: boolean = false;
  handleChange() {
    this.isFileUploaded = true;
    console.log(this.isFileUploaded);
  }
  addMore() {
    this.isFileUploaded = false;
  }
}
