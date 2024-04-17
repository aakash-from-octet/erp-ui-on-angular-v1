import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ExamsListService } from 'src/app/services/exams-list.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-request-examination',
  templateUrl: './request-examination.component.html',
  styleUrls: ['./request-examination.component.scss'],
})
export class RequestExaminationComponent {
  constructor(
    private examsListService: ExamsListService,
    private sharedService: SharedService,
    private route: Router
  ) {}
  isExamData: boolean | undefined;
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
  shiftData: any = [];
  ngOnInit() {
    this.sharedService.examDataStatus.subscribe((status: boolean) => {
      this.isExamData = status;
    });
    this.examsListService.getShiftData().subscribe((data: any[]) => {
      this.shiftData = data;
    });
  }
  dataShow() {
    this.sharedService.setExamDataStatus(true);
    this.route.navigate(['/exam-agency/exams/']);
  }
}
