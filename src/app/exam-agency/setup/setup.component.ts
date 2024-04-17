import { Component } from '@angular/core';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent {
  centralServer: string = 'www.centralserver.link';
  name: string = 'ABC Inc.';
  ip: string = '235.456.894.364';
  description: string =
    'Lorem Ipsum is a dummy text which can be replaced by the original text later.';
  msg: any;
  isAddServer: boolean = false;
  frame1color: boolean = false;

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

  openAddServer() {
    this.isAddServer = !this.isAddServer;
  }

  closeAddServer() {
    this.isAddServer = false;
  }

  submitAddServer() {
    this.isAddServer = false;
    this.frame1color = true;
  }
}
