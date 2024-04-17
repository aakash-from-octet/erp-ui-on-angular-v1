import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-allocation-table',
  templateUrl: './allocation-table.component.html',
  styleUrls: ['./allocation-table.component.scss'],
})
export class AllocationTableComponent {
  @Output() cancelClicked = new EventEmitter<void>();
  dataSet: any = [
    {
      id: 1,
      date: '22 - April - 2023',
    },
    {
      id: 2,
      date: '24 - April - 2023',
    },
    {
      id: 3,
      date: '26 - April - 2023',
    },
    {
      id: 4,
      date: '28 - April - 2023',
    },
  ];
  checkboxEnabled: boolean = false;
  value: string[] = [];
  nodes = [
    {
      key: '0',
      title: 'ExamPro Services',
    },
    {
      key: '1',
      title: 'TestMasters Agency',
    },
    {
      key: '2',
      title: 'Precision Assessments',
    },
    {
      key: '3',
      title: 'ProctorGuard Examinations',
    },
  ];
}
