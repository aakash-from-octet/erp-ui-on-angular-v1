import { Component } from '@angular/core';

@Component({
  selector: 'app-applicable-exam',
  templateUrl: './applicable-exam.component.html',
  styleUrls: ['./applicable-exam.component.scss'],
})
export class ApplicableExamComponent {
  selectedItems: string[] = [];
  menuVisible: boolean = false;
  checkOptionsOne = [
    { label: 'CGL', value: 'CGL', checked: true },
    { label: 'CHSL', value: 'CHSL' },
    { label: 'JEE', value: 'JEE' },
    { label: 'MTS', value: 'MTS' },
  ];
  removeItem(itemToRemove: string) {
    this.selectedItems = this.selectedItems.filter(
      (item) => item !== itemToRemove
    );
  }
  log(value: object[]): void {
    console.log(value);
  }
  cancelSelection() {
    this.selectedItems = [];
    this.menuVisible = false;
  }
  saveSelection() {
    this.menuVisible = false;
    this.selectedItems = this.checkOptionsOne
      .filter((item) => item.checked)
      .map((item) => item.value);
  }
}
