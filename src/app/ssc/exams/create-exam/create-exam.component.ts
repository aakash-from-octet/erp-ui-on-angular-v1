import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss'],
})
export class CreateExamComponent {
  constructor(private msg: NzMessageService, private router: Router) {}

  current = 0;
  index = 'First-content';
  selectedValueDefault = null;
  disable = false;

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'Third-content';
        break;
      }
      case 3: {
        this.index = 'Forth-content';
        break;
      }
      case 4: {
        this.index = 'Fifth-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

  onIndexChange(current: number): void {
    this.current = current;
    this.changeContent();
  }

  goTODashboard() {
    this.router.navigate(['/ssc/exams']);
  }
}
