import { Component } from '@angular/core';
import { NzTabChangeEvent } from 'ng-zorro-antd/tabs';
import { TabService } from 'src/app/services/tab.service';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.scss'],
})
export class ApprovalsComponent {
  assessmentData: any = [
    {
      id: '1',
      title: 'JEE Advance',
      status: 'Pending',
      hr: '10 hours ago',
      examinationYear: '2023-24',
      duration: '3hr.',
      questions: '30',
      createdOn: '24-Mar-2023',
    },
    {
      id: '2',
      title: 'JEE Advance',
      status: 'Pending',
      hr: '10 hours ago',
      examinationYear: '2023-24',
      duration: '3hr.',
      questions: '30',
      createdOn: '24-Mar-2023',
    },
    {
      id: '3',
      title: 'JEE Advance',
      status: 'Pending',
      hr: '10 hours ago',
      examinationYear: '2023-24',
      duration: '3hr.',
      questions: '30',
      createdOn: '24-Mar-2023',
    },
  ];
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
      status: 'Pending',
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
      status: 'Pending',
      hr: '10 hours ago',
      policy: 'Creation central server from exam conducting agency',
      approvalGrade: '1 Leve',
      createdOn: '24-Mar-2023',
      createdBy: 'John Doe',
      trigger: 'key',
    },
  ];
  examsData: any = [
    {
      id: '1',
      title: 'JEE Advance',
      status: 'Pending',
      hr: '10 hours ago',
      agencyName: 'ABC Inc.',
      examinationYear: '2023-24',
      languages: 'Hindi, English, Bengali, Telugu, Marathi, Tamil, Urdu',
      createdOn: '24-Mar-2023',
    },
    {
      id: '2',
      title: 'JEE Advance',
      status: 'Pending',
      hr: '10 hours ago',
      agencyName: 'ABC Inc.',
      examinationYear: '2023-24',
      languages: 'Hindi, English, Bengali, Telugu, Marathi, Tamil, Urdu',
      createdOn: '24-Mar-2023',
    },
    {
      id: '3',
      title: 'JEE Advance',
      status: 'Pending',
      hr: '10 hours ago',
      agencyName: 'ABC Inc.',
      examinationYear: '2023-24',
      languages: 'Hindi, English, Bengali, Telugu, Marathi, Tamil, Urdu',
      createdOn: '24-Mar-2023',
    },
  ];
  serverData: any = [
    {
      id: '1',
      title: 'ABC Inc.',
      status: 'Pending',
      hr: '10 hours ago',
      centralServer: 'www.centralserver.com',
      ipAddress: [
        '235.456.894.364',
        '235.456.894.364',
        '235.456.894.364',
        '235.456.894.364',

        '235.456.894.364',
      ],
      createdOn: '24-Mar-2023',
    },
    {
      id: '2',
      title: 'ABC Inc.',
      status: 'Pending',
      hr: '10 hours ago',
      centralServer: 'www.centralserver.com',
      ipAddress: [
        '235.456.894.364',
        '235.456.894.364',
        '235.456.894.364',
        '235.456.894.364',
      ],
      createdOn: '24-Mar-2023',
    },
    {
      id: '3',
      title: 'ABC Inc.',
      status: 'Pending',
      hr: '10 hours ago',
      centralServer: 'www.centralserver.com',
      ipAddress: [
        '235.456.894.364',
        '235.456.894.364',
        '235.456.894.364',
        '235.456.894.364',
        '235.456.894.364',
        '235.456.894.364',
      ],
      createdOn: '24-Mar-2023',
    },
  ];
  constructor(private tabService: TabService) {}

  onTabChange(event: NzTabChangeEvent): void {
    if (event.index !== undefined && event.tab) {
      const selectedTabTitle = event.tab.nzTitle;
      this.tabService.setActiveTab(selectedTabTitle);
    }
  }
  radioValue = 'B';
  visible = false;
  modal1 = false;
  modal2 = false;
  modal3 = false;

  viewRequest(): void {
    this.visible = true;
  }
  closeRequest(): void {
    this.visible = false;
  }
  openAadharinfo() {
    this.modal1 = true;
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
