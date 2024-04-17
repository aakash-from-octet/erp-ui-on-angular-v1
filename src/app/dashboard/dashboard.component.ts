import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  radioValue = 'A';
  userValue: string = '';
  constructor(private sharedService: SharedService) {
    this.userValue = this.sharedService.getInputValue();
  }
}
