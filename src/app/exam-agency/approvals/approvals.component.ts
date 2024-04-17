import { Component } from '@angular/core';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.scss'],
})
export class ApprovalsComponent {
  radioValue = 'A';
  visible = false;
  modal1 = false;
  modal2 = false;
  modal3 = false;
  hidenodata = false;
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
  hideNoData() {
    this.hidenodata = true;
  }
}
