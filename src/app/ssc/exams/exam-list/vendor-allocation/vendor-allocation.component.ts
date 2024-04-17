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
}
@Component({
  selector: 'app-vendor-allocation',
  templateUrl: './vendor-allocation.component.html',
  styleUrls: ['./vendor-allocation.component.scss'],
})
export class VendorAllocationComponent {
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
  listOfChildrenData: ChildrenItemData[] = [{ key: 1 }, { key: 2 }, { key: 3 }];
  expandIcon(record: any): string {
    return record.expand ? 'your-expanded-icon' : 'your-collapsed-icon';
  }
}
