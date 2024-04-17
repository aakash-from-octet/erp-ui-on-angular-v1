import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamsListService } from 'src/app/services/exams-list.service';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.scss'],
})
export class ExamDetailComponent {
  exam: any;
  tabledData: any;
  isDownloadSuccess = false;
  isKeyDownload = false;
  constructor(
    private examsListService: ExamsListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const examId = this.route.snapshot.paramMap.get('id');

    if (examId) {
      this.examsListService.getDataById(examId).subscribe((data) => {
        this.exam = data;
        this.tabledData = this.exam.shiftDetail;
        console.log(this.tabledData);
      });
    }
  }
  downloadSuccess() {
    this.isDownloadSuccess = true;
  }
  keyDownload() {
    this.isKeyDownload = true;
  }
}
