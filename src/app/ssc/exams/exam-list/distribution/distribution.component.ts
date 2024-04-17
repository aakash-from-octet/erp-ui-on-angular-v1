import { Component } from '@angular/core';
interface ParentItemData {
  key: number;
  date: string;
  shift1: string;
  shift2: string;
  shift3: string;
  expand: boolean;
}

interface ChildrenItemData {
  key: number;
  companyName: string;
}
@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.scss'],
})
export class DistributionComponent {
  checkOptionsOne = [
    {
      key: 1,
      label: 'ExamPro Services',
      value: 'ExamPro Services',
      checked: true,
    },
    {
      key: 2,
      label: 'TestMasters Agency',
      value: 'TestMasters Agency',
    },
    {
      key: 3,
      label: 'Precision Assessments',
      value: 'Precision Assessments',
    },
    {
      key: 4,
      label: 'ExamEase Solutions',
      value: 'ExamEase Solutions',
    },
    {
      key: 5,
      label: 'ProctorGuard Examinations',
      value: 'ProctorGuard Examinations',
    },
  ];
  listOfParentData: ParentItemData[] = [
    {
      key: 1,
      date: '24 April 2023',
      shift1: 'TCS and 2 more',
      shift2: 'TCS and 2 more',
      shift3: 'TCS and 2 more',
      expand: false,
    },
    {
      key: 2,
      date: '24 April 2023',
      shift1: 'TCS and 2 more',
      shift2: 'TCS and 2 more',
      shift3: 'TCS and 2 more',
      expand: false,
    },
    {
      key: 3,
      date: '24 April 2023',
      shift1: 'TCS and 2 more',
      shift2: 'TCS and 2 more',
      shift3: 'TCS and 2 more',
      expand: false,
    },
    {
      key: 4,
      date: '24 April 2023',
      shift1: 'TCS and 2 more',
      shift2: 'TCS and 2 more',
      shift3: 'TCS and 2 more',
      expand: false,
    },
    {
      key: 5,
      date: '24 April 2023',
      shift1: 'TCS and 2 more',
      shift2: 'TCS and 2 more',
      shift3: 'TCS and 2 more',
      expand: false,
    },
  ];
  listOfChildrenData: ChildrenItemData[] = [
    { key: 1, companyName: 'Tata Consultancy' },
    { key: 2, companyName: 'ExamPro Services' },
    { key: 3, companyName: 'ExamPro Services' },
  ];
  expandIcon(record: any): string {
    return record.expand ? 'your-expanded-icon' : 'your-collapsed-icon';
  }
  selectedValue: any = '1';
  selectedColor(value: string): string {
    switch (value) {
      case '1':
        return 'schedule-color';
      case '2':
        return 'pending-color';
      case '3':
        return 'success-color';
      case '4':
        return 'failed-color';
      case '5':
        return 'series-color';
      case '6':
        return 'cancelled-color';
      default:
        return '';
    }
  }
}
