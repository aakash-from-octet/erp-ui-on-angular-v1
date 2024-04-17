import { Component } from '@angular/core';
import { QuestionListService } from '../../services/question-list.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss'],
})
export class ReviewListComponent {
  data: any[] = [];
  userValue: string = '';
  constructor(
    private QuestionListService: QuestionListService,
    private sharedService: SharedService
  ) {
    this.userValue = this.sharedService.getInputValue();
  }
  ngOnInit() {
    this.QuestionListService.getData().subscribe((data: any[]) => {
      this.data = data;
    });
  }
}
