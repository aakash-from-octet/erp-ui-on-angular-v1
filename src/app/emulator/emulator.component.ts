import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-emulator',
  templateUrl: './emulator.component.html',
  styleUrls: ['./emulator.component.scss'],
})
export class EmulatorComponent {
  constructor(private router: Router) {}
  examsData: any = [
    {
      id: '1234',
      name: 'JEE Mains',
      type: 'MCQ',
      hr: '10 hours ago',
      question: 54,
      remark: 'Lorem Ipsum is a dummy text',
    },
    {
      id: '1235',
      name: 'JEE Mains',
      type: 'MCQ',
      hr: '10 hours ago',
      question: 53,
      remark: 'Lorem Ipsum is a dummy text',
    },
    {
      id: '1236',
      name: 'JEE Mains',
      type: 'MCQ',
      hr: '8 hours ago',
      question: 30,
      remark: 'Lorem Ipsum is a dummy text',
    },
    {
      id: '1237',
      name: 'JEE Mains',
      type: 'MCQ',
      hr: '7 hours ago',
      question: 50,
      remark: 'Lorem Ipsum is a dummy text',
    },
    {
      id: '1238',
      name: 'JEE Mains',
      type: 'MCQ',
      hr: '9 hours ago',
      question: 60,
      remark: 'Lorem Ipsum is a dummy text',
    },
    {
      id: '1239',
      name: 'JEE Mains',
      type: 'MCQ',
      hr: '10 hours ago',
      question: 60,
      remark: 'Lorem Ipsum is a dummy text',
    },
  ];
  isVisible = false;
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    this.isVisible = false;
    this.router.navigate(['emulator-detail']);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  keyInputMask = createMask<any>({
    alias: '********   -   ********   -  ********',
    inputFormat: '********   -   ********   -  ********',
  });

  keyFC = new FormControl('');
}
