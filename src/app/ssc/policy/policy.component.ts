import { Component } from '@angular/core';
import { TabService } from 'src/app/services/tab.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss'],
})
export class PolicyComponent {
  policiesData: any = [
    {
      id: '1',
      title: 'Create Central Server',
      status: 'Pending',
      hr: '10 hours ago',
      policy: 'Creation central server from exam conducting agency',
      approvalGrade: '1 Leve',
      createdOn: '24-Mar-2023',
      createdBy: 'John Doe',
      trigger: 'server',
    },
    {
      id: '2',
      title: 'Approve Exam Paper',
      status: 'Active',
      hr: '10 hours ago',
      policy: 'Creation central server from exam conducting agency',
      approvalGrade: '1 Leve',
      createdOn: '24-Mar-2023',
      createdBy: 'John Doe',
      trigger: 'page',
    },
    {
      id: '3',
      title: 'Request Exam Paper Key ',
      status: 'Expired',
      hr: '10 hours ago',
      policy: 'Creation central server from exam conducting agency',
      approvalGrade: '1 Leve',
      createdOn: '24-Mar-2023',
      createdBy: 'John Doe',
      trigger: 'key',
    },
    {
      id: '4',
      title: 'Request Exam Paper Key ',
      status: 'Draft',
      hr: '10 hours ago',
      policy: 'Creation central server from exam conducting agency',
      approvalGrade: '1 Leve',
      createdOn: '24-Mar-2023',
      createdBy: 'John Doe',
      trigger: 'key',
    },
  ];

  constructor(private tabService: TabService, private router: Router) {}

  onTabSelect(tabName: string) {
    this.tabService.setSelectedTab(tabName);
  }
  createPolicy(tabName: string) {
    this.tabService.setSelectedTab(tabName);
    this.router.navigate(['/ssc/policy/create-policy']);
  }
}
