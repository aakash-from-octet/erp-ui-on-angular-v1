import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { Subscription } from 'rxjs';
import { TabService } from 'src/app/services/tab.service';
interface Step {
  title: string;
  content: string;
  iconClass: string;
}
@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.scss'],
})
export class CreatePolicyComponent {
  selectedTabSubscription: Subscription;
  tabValue: string = 'user-created-policy';
  hideConditionsStep: boolean = false;
  constructor(
    private msg: NzMessageService,
    private router: Router,
    private tabService: TabService
  ) {
    this.selectedTabSubscription = this.tabService.selectedTab$.subscribe(
      (selectedTab) => {
        this.tabValue = selectedTab;
        if (selectedTab === 'system-policy') {
          this.hideConditionsStep = true;
        }
      }
    );
  }

  current = 0;

  steps: Step[] = [
    {
      title: 'Basic Details',
      content: 'First-content',
      iconClass: 'basic-details-icon',
    },
    {
      title: 'Conditions',
      content: 'Second-content',
      iconClass: 'basic-details-icon',
    },
    { title: 'Workflow', content: 'Third-content', iconClass: 'basic-details-icon' },
    { title: 'Overview', content: 'Forth-content', iconClass: 'basic-details-icon' },
  ];
  selectedValueDefault = null;
  disable = false;

  next(): void {
    if (this.current < this.steps.length - 1) {
      this.current += 1;
      this.changeContent();
    }
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    this.steps[this.current].content;
  }
  onIndexChange(current: number): void {
    this.current = current;
    this.changeContent();
  }
  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

  goTODashboard() {
    this.router.navigate(['ssc/policy']);
  }
}
