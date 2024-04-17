import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TabService } from 'src/app/services/tab.service';

@Component({
  selector: 'app-policy-basic-details',
  templateUrl: './policy-basic-details.component.html',
  styleUrls: ['./policy-basic-details.component.scss'],
})
export class PolicyBasicDetailsComponent {
  selectedTabSubscription: Subscription;
  tabValue: string = 'system-policy';
  constructor(private tabService: TabService) {
    this.selectedTabSubscription = this.tabService.selectedTab$.subscribe(
      (selectedTab) => {
        this.tabValue = selectedTab;
      }
    );
  }
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
  ];
  isArray(value: any): boolean {
    return Array.isArray(value);
  }
}
