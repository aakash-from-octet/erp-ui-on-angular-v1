import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agency-header',
  templateUrl: './agency-header.component.html',
  styleUrls: ['./agency-header.component.scss'],
})
export class AgencyHeaderComponent {
  constructor(private sharedService: SharedService, private router: Router) {}
  onLogout() {
    this.sharedService.logout();
    this.router.navigate(['/']);
  }
}
