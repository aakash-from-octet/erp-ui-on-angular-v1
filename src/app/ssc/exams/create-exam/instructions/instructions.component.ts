import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent {
  switchValue = false;
  fileData: any = [
    { id: 1, filetype: 'Language : ' },
    { id: 2, filetype: 'Language : ' },
    { id: 3, filetype: 'Language : ' },
    { id: 4, filetype: 'Language : ' }
  ];
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
  englishContent: string = 'Start translating in English';
  hindiContent: string = 'Start translating in Hindi';
  punjabiContent: string = 'Start translating in Punjabi';
  constructor(private msg: NzMessageService) { }

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

  noSectionFirst: boolean = true;
  noSectionSecond: boolean = false;
  clickSwitch(): void {
    if(this.switchValue===true){
      this.noSectionFirst = true;
      this.noSectionSecond = false;
    }
    if(this.switchValue===false){
      this.noSectionFirst = false;
      this.noSectionSecond = true;
    }      
  }
}
