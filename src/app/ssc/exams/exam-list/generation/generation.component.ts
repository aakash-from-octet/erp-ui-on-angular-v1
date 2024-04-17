import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.scss'],
})
export class GenerationComponent {
  @Output() cancelClicked = new EventEmitter<void>();
  dataSet: any = [
    {
      id: 1,
      date: '22 - April - 2023',
      shift1: 'Schedule',
      shift2: 58679532,
      shift3: 'Cancelled',
    },
    {
      id: 2,
      date: '24 - April - 2023',
      shift1: 58679532,
      shift2: 'Cancelled',
      shift3: 'Schedule',
    },
    {
      id: 3,
      date: '26 - April - 2023',
      shift1: 58679532,
      shift2: 'Cancelled',
      shift3: 'Schedule',
    },
    {
      id: 4,
      date: '28 - April - 2023',
      shift1: 'Cancelled',
      shift2: 'Schedule',
      shift3: 58679532,
    },
  ];
  isNumeric(value: any): boolean {
    console.log(!isNaN(value));
    return !isNaN(value);
  }
  cancelExam(): void {
    this.cancelClicked.emit();
  }
}
