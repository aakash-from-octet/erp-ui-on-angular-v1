import { Component } from '@angular/core';

@Component({
  selector: 'app-emulator-detail',
  templateUrl: './emulator-detail.component.html',
  styleUrls: ['./emulator-detail.component.scss'],
})
export class EmulatorDetailComponent {
  radioValue = 'A';
  toolData = [
    { id: 1, status: 'reject' },
    { id: 2, status: 'success' },
    { id: 3, status: 'success' },
    { id: 4, status: 'success' },
    { id: 5, status: 'warning' },
    { id: 6, status: '' },
    { id: 7, status: '' },
    { id: 8, status: '' },
    { id: 9, status: '' },
    { id: 10, status: '' },
  ];

  currentIndex = 4; // Initial active index
  summaryVisible: boolean = false;
  move(direction: 'prev' | 'next'): void {
    if (direction === 'prev') {
      this.currentIndex = Math.max(0, this.currentIndex - 1);
    } else {
      this.currentIndex = Math.min(
        this.toolData.length - 1,
        this.currentIndex + 1
      );
    }
  }
  makeActive(index: number): void {
    this.currentIndex = index;
  }
  showSummary() {
    this.summaryVisible = !this.summaryVisible;
  }
  summaryhide() {
    this.summaryVisible = !this.summaryVisible;
  }
  // e-sign
  modal1 = false;
  modal2 = false;
  modal3 = false;

  openAadharinfo() {
    this.modal1 = true;
    this.summaryVisible = false;
  }
  openInputAadhar() {
    this.modal1 = false;
    this.modal2 = true;
  }
  openAadharOtp() {
    this.modal2 = false;
    this.modal3 = true;
  }
  handleCancel() {
    this.modal1 = false;
    this.modal2 = false;
    this.modal3 = false;
  }
}
