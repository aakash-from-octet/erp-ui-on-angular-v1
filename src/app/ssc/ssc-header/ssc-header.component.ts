import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-ssc-header',
  templateUrl: './ssc-header.component.html',
  styleUrls: ['./ssc-header.component.scss'],
})
export class SscHeaderComponent {
  constructor(private sharedService: SharedService, private router: Router) {}
  onLogout() {
    this.sharedService.logout();
    this.router.navigate(['/']);
  }
}
