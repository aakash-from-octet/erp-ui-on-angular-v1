import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-builder-header',
  templateUrl: './builder-header.component.html',
  styleUrls: ['./builder-header.component.scss'],
})
export class BuilderHeaderComponent {
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
}
