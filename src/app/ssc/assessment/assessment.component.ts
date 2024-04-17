import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
})
export class AssessmentComponent {
  assessmentData: any[] = [];
  constructor(private sharedService: SharedService) {
    this.sharedService.getAssessmentData().subscribe((data: any[]) => {
      this.assessmentData = data;
    });
  }
}
