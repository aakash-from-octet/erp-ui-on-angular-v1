import { Component } from '@angular/core';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss'],
})
export class WorkflowComponent {
  radioValue: string = 'A';
  approvers = [
    { demoValue: 1, selectedValue: '1' }, // Initial approver
  ];

  addApprover(): void {
    this.approvers.push({ demoValue: 1, selectedValue: '1' });
  }

  removeApprover(index: number): void {
    this.approvers.splice(index, 1);
  }
}
