import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private sharedService: SharedService) {}
  value?: string;
  passwordVisible = false;
  password?: string;
  inputValue: string = '';
  isVisible = false;
  onSubmit() {
    if (this.inputValue === 'a1') {
      this.isVisible = true;
    }
    this.sharedService.setInputValue(this.inputValue);
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
