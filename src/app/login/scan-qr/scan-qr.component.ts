import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.component.html',
  styleUrls: ['./scan-qr.component.scss'],
})
export class ScanQrComponent {
  showSecondDiv: boolean = false;
  showFirstDiv: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // After 3 seconds, show the second div and hide the first div
    setTimeout(() => {
      this.showSecondDiv = true;
      this.showFirstDiv = false;
    }, 1000);
  }

  goToCreateAccount() {
    this.router.navigate(['/create-account']);
  }
}
