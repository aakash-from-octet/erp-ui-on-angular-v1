import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-emulator-header',
  templateUrl: './emulator-header.component.html',
  styleUrls: ['./emulator-header.component.scss'],
})
export class EmulatorHeaderComponent {
  constructor(private sharedService: SharedService, private router: Router) {}
  onLogout() {
    this.sharedService.logout();
    this.router.navigate(['/']);
  }
}
