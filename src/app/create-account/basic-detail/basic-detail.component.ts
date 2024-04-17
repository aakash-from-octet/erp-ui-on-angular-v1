import { Component } from '@angular/core';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-basic-detail',
  templateUrl: './basic-detail.component.html',
  styleUrls: ['./basic-detail.component.scss'],
})
export class BasicDetailComponent {
  msg: any;
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
}
