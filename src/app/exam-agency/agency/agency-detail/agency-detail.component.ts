import { Component } from '@angular/core';
import { ExamsListService } from 'src/app/services/exams-list.service';

@Component({
  selector: 'app-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.scss'],
})
export class AgencyDetailComponent {
  data: any;
  fileData: any = [
    { id: 1, filetype: 'Company Certificate' },
    { id: 2, filetype: 'Company Certificate' },
    { id: 3, filetype: 'Company Certificate' },
    { id: 4, filetype: 'GSTIN Certificate' },
    { id: 5, filetype: 'GSTIN Certificate' },
  ];
  constructor(private examsListService: ExamsListService) {
    this.examsListService.getUserData().subscribe((data: any[]) => {
      this.data = data;
    });
    console.log(this.fileData);
  }
}
