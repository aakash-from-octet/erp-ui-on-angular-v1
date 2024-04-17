import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-translator-header',
  templateUrl: './translator-header.component.html',
  styleUrls: ['./translator-header.component.scss'],
})
export class TranslatorHeaderComponent {
  constructor(private router: Router) {}
  isVisible = false;
  isChange = false;
  goToHome(): void {
    this.router.navigate(['/dashboard']);
  }
  goToPreview(): void {
    // this.router.navigate(['/preview']);
    this.isVisible = true;
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleBackClicked(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  saveChanges(): void {
    this.isChange = true;
  }
  handleCancel(): void {
    this.isChange = false;
  }

  // approveChanges
  isApprove = false;
  approveChanges(): void {
    this.isApprove = true;
  }
  submitApproveChanges(): void {
    this.isApprove = false;
    this.router.navigate(['/dashboard']);
  }
  backApproveChanges(): void {
    this.isApprove = false;
  }
  // approveChanges
  isRevert = false;
  revertToAuthor(): void {
    this.isRevert = true;
  }
  submitRevertToAuthor(): void {
    this.isRevert = false;
  }
  backRevertToAuthor(): void {
    this.isRevert = false;
  }
  submitChanges() {
    this.router.navigate(['/dashboard']);
  }
}
