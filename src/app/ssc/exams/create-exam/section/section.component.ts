import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  checkOptionsOne = [
    {
      label: 'Hindi',
      value: 'Hindi',
      imageUrl: '../../../../assets/images/language-icon/hindi.svg',
      checked: true,
    },
    {
      label: 'English',
      value: 'English',
      imageUrl: '../../../../assets/images/language-icon/english.svg',
    },
    {
      label: 'Bengali',
      value: 'Bengali',
      imageUrl: '../../../../assets/images/language-icon/bengali.svg',
    },
    {
      label: 'Telugu',
      value: 'Telugu',
      imageUrl: '../../../../assets/images/language-icon/telugu.svg',
    },
    {
      label: 'Marathi',
      value: 'Marathi',
      imageUrl: '../../../../assets/images/language-icon/marathi.svg',
    },
    {
      label: 'Tamil',
      value: 'Tamil',
      imageUrl: '../../../../assets/images/language-icon/tamil.svg',
    },
    {
      label: 'Urdu',
      value: 'Urdu',
      imageUrl: '../../../../assets/images/language-icon/urdu.svg',
    },
    {
      label: 'Gujarati',
      value: 'Gujarati',
      imageUrl: '../../../../assets/images/language-icon/gujarati.svg',
    },
    {
      label: 'Kannada',
      value: 'Kannada',
      imageUrl: '../../../../assets/images/language-icon/kannada.svg',
    },
    {
      label: 'Punjabi',
      value: 'Punjabi',
      imageUrl: '../../../../assets/images/language-icon/punjabi.svg',
    },
    {
      label: 'Malayalam',
      value: 'Malayalam',
      imageUrl: '../../../../assets/images/language-icon/malayalam.svg',
    },
    {
      label: 'Odia',
      value: 'Odia',
      imageUrl: '../../../../assets/images/language-icon/odia.svg',
    },
  ];
  listOfData: any[] = [
    {
      key: '1',
      subject: 'Maths',
      topic: 'Time and distance',
      subtopic: 'Time',
      high: '5',
      medium: '3',
      low: '2',
    },
    {
      key: '2',
      subject: 'Maths',
      topic: 'Time and distance',
      subtopic: 'Time',
      high: '5',
      medium: '3',
      low: '2',
    },
    {
      key: '3',
      subject: 'Maths',
      topic: 'Time and distance',
      subtopic: 'Time',
      high: '5',
      medium: '3',
      low: '2',
    },
  ];
  instructions: boolean = false;
  englishContent: string = 'Start translating in English';
  hindiContent: string = 'Start translating in Hindi';
  punjabiContent: string = 'Start translating in Punjabi';
  data = [
    'Section Template 1',
    'Section Template 2',
    'Section Template 3',
    'Section Template 4',
    'Section Template 5',
  ];
  noSection: boolean = false;
  constructor(private msg: NzMessageService) {}

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }
  addedRows: any[] = [];

  addRow() {
    const newRow = {
      subject: '',
      topic: '',
      subtopic: '',
      high: '',
      medium: '',
      low: '',
    };
    this.addedRows.push(newRow);
  }

  removeRow(index: number) {
    this.addedRows.splice(index, 1);
  }

  isVisible: boolean = false;
  addSection() {
    this.isVisible = true;
  }
  handleOk() {
    this.isVisible = false;
    this.noSection = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
