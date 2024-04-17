import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  size = 100;
  userValue: string | null = '';
  value: string | null = '';
  constructor(private sharedService: SharedService, private router: Router) {
    this.value = this.sharedService.getInputValue();
    if (this.value === 'e1') {
      this.userValue = 'Evaluator';
    } else if (this.value === 't1') {
      this.userValue = 'Translator';
    } else if (this.value === 'te1') {
      this.userValue = 'Translation Evaluator';
    } else if (this.value === 'v1') {
      this.userValue = 'Vetter';
    } else {
      this.userValue = 'Author';
    }
  }
  onLogout() {
    this.sharedService.logout();
    this.router.navigate(['/']);
  }
}
