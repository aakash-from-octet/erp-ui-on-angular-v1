import { Component } from '@angular/core';
import { ExamsListService } from 'src/app/services/exams-list.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  data: any;
  isVisible: boolean = false;
  constructor(private examsListService: ExamsListService) {
    this.examsListService.getUserData().subscribe((data: any[]) => {
      this.data = data;
    });
  }
  addUser() {
    this.isVisible = true;
  }
  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
