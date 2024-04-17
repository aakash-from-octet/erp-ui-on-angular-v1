import { Component } from '@angular/core';
import { ExamsListService } from 'src/app/services/exams-list.service';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss'],
})
export class ExamsComponent {
  constructor(
    private ExamsListService: ExamsListService,
    private sharedService: SharedService
  ) {}
  exams: any[] = [];
  isExamData: boolean | undefined;
  ngOnInit() {
    this.ExamsListService.getData().subscribe((data: any[]) => {
      this.exams = data;
    });
    this.sharedService.examDataStatus.subscribe((status: boolean) => {
      this.isExamData = status;
    });
  }
  dataShow() {
    this.sharedService.setExamDataStatus(true);
  }
}
