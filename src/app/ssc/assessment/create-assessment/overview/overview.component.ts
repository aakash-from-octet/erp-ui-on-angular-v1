import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  overviewData: any = [
    { id: '1', label: 'Exam Name', labelInfo: 'JEE MAINs' },
    { id: '2', label: 'Exam Year', labelInfo: '2023-24' },
    { id: '3', label: 'Number Of Question', labelInfo: '30' },
    { id: '4', label: 'Number of Sections', labelInfo: '8' },
    { id: '5', label: 'Marking Type ', labelInfo: 'Negative' },
    { id: '6', label: 'Duration (Hr.) ', labelInfo: '6' },
    {
      id: '7',
      label: 'Question Navigation ',
      labelInfo: 'Sequential Question Order',
    },
    {
      id: '8',
      label: 'Section Source ',
      labelInfo: 'Randomly from agency Question Bank',
    },
    {
      id: '9',
      label: 'Max. Limit Per Question ',
      labelInfo: '6',
    },
    {
      id: '10',
      label: 'Max. Unique Set ',
      labelInfo: '2',
    },
    {
      id: '11',
      label: 'Question Order ',
      labelInfo: ['Shuffle Questions Within Section', 'Shuffle Answers'],
    },
    {
      id: '12',
      label: 'Grading Type',
      labelInfo: 'Standard',
    },
    {
      id: '13',
      label: 'Duplicacy Index',
      labelInfo: 'Low',
    },
    {
      id: '14',
      label: 'Visibility Index',
      labelInfo: 'Standard',
    },
    {
      id: '15',
      label: 'Display Prefrence',
      labelInfo: 'One Question at a time',
    },
    {
      id: '16',
      label: 'Section from Question Bank',
      labelInfo: 'Low',
    },
  ];
  isArray(value: any): boolean {
    return Array.isArray(value);
  }
}
