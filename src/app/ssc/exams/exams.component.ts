import { Component } from '@angular/core';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss'],
})
export class ExamsComponent {
  newExamModal: boolean = false;
  checkOptionsOne = [
    {
      label: 'Hindi',
      value: 'Hindi',
      imageUrl: '../../../../assets/images/language-icon/hindi.svg',
      checked: true,
    },
    {
      label: 'English',
      value: 'English',
      imageUrl: '../../../../assets/images/language-icon/english.svg',
    },
    {
      label: 'Bengali',
      value: 'Bengali',
      imageUrl: '../../../../assets/images/language-icon/bengali.svg',
    },
    {
      label: 'Telugu',
      value: 'Telugu',
      imageUrl: '../../../../assets/images/language-icon/telugu.svg',
    },
    {
      label: 'Marathi',
      value: 'Marathi',
      imageUrl: '../../../../assets/images/language-icon/marathi.svg',
    },
    {
      label: 'Tamil',
      value: 'Tamil',
      imageUrl: '../../../../assets/images/language-icon/tamil.svg',
    },
    {
      label: 'Urdu',
      value: 'Urdu',
      imageUrl: '../../../../assets/images/language-icon/urdu.svg',
    },
    {
      label: 'Gujarati',
      value: 'Gujarati',
      imageUrl: '../../../../assets/images/language-icon/gujarati.svg',
    },
    {
      label: 'Kannada',
      value: 'Kannada',
      imageUrl: '../../../../assets/images/language-icon/kannada.svg',
    },
    {
      label: 'Punjabi',
      value: 'Punjabi',
      imageUrl: '../../../../assets/images/language-icon/punjabi.svg',
    },
    {
      label: 'Malayalam',
      value: 'Malayalam',
      imageUrl: '../../../../assets/images/language-icon/malayalam.svg',
    },
    {
      label: 'Odia',
      value: 'Odia',
      imageUrl: '../../../../assets/images/language-icon/odia.svg',
    },
  ];
  constructor() {}
  addNewExamModal() {
    this.newExamModal = true;
  }
  closeExamModal() {
    this.newExamModal = false;
  }
}
