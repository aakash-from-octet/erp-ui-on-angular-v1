import { Component } from '@angular/core';
import { ExamsListService } from 'src/app/services/exams-list.service';

@Component({
  selector: 'app-approve-details',
  templateUrl: './approve-details.component.html',
  styleUrls: ['./approve-details.component.scss'],
})
export class ApproveDetailsComponent {
  constructor(private examsListService: ExamsListService) {}
  shiftData: any = [];
  ngOnInit() {
    this.examsListService.getShiftData().subscribe((data: any[]) => {
      this.shiftData = data;
    });
  }
}
