import { Component } from '@angular/core';

@Component({
  selector: 'app-assessment-summary',
  templateUrl: './assessment-summary.component.html',
  styleUrls: ['./assessment-summary.component.scss'],
})
export class AssessmentSummaryComponent {
  showReject: boolean = false;
  showApprove: boolean = false;
  showRejectModal() {
    this.showReject = true;
  }
  showApproveModal() {
    this.showApprove = true;
  }
  handleCancel() {
    this.showReject = false;
    this.showApprove = false;
  }
  handleOk() {
    this.showReject = false;
    this.showApprove = false;
  }
}
