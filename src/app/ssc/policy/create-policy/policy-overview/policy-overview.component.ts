import { Component } from '@angular/core';

@Component({
  selector: 'app-policy-overview',
  templateUrl: './policy-overview.component.html',
  styleUrls: ['./policy-overview.component.scss'],
})
export class PolicyOverviewComponent {
  overviewData: any = [
    {
      id: '1',
      label: 'Policy Name',
      labelInfo: 'Creation central server from exam conducting agency',
    },
    {
      id: '2',
      label: 'Description',
      labelInfo:
        'Lorem ipsum dolor sit amet consectetur. Vitae interdum diam dolor turpis amet tincidunt sed arcu tincidunt. Sapien mattis in lectus tempus. Pellentesque dolor diam leo sed ipsum ut nullam. ',
    },
    { id: '3', label: 'Event', labelInfo: 'Create Central Server ' },
    {
      id: '4',
      label: 'Condition',
      labelInfo: [
        'Approve if IP Address Matches with server.',
        'Request comes 1 hr. before exam time.',
        'Request is internally approved.',
      ],
    },
    { id: '5', label: 'Level of Approval Required ', labelInfo: '2' },
    {
      id: '6',
      label: 'Approval Required By ',
      labelInfo: 'Director OR Manager AND Assistance Manager',
    },
  ];
  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  checkOptionsOne = [
    {
      label: 'Submit Central Server',
      value: 'Submit Central Server',
      imageUrl: '../../../../assets/images/content-agency.svg',
      checked: true,
    }
  ];
  checkOptionsTwo = [
    {
      label: 'Request Exam Paper',
      value: 'Request Exam Paper',
      imageUrl: '../../../../assets/images/content-agency.svg',
      checked: true,
    }
  ];
  checkOptionsThree = [
    {
      label: 'Approve Exam Paper',
      value: 'Approve Exam Paper',
      imageUrl: '../../../../assets/images/content-agency.svg',
      checked: true,
    }
  ];
}
