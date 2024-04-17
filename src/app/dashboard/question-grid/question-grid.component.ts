import { Component } from '@angular/core';
import { QuestionListService } from '../../services/question-list.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-question-grid',
  templateUrl: './question-grid.component.html',
  styleUrls: ['./question-grid.component.scss'],
})
export class QuestionGridComponent {
  data: any[] = [];
  userValue: string = '';
  constructor(
    private QuestionListService: QuestionListService,
    private sharedService: SharedService,
    private router: Router
  ) {
    this.userValue = this.sharedService.getInputValue();
  }
  ngOnInit() {
    this.QuestionListService.getData().subscribe((data: any[]) => {
      this.data = data;
    });
  }
  goToBuilder() {
    if (this.userValue === 't1' || this.userValue === 'v1') {
      this.router.navigate(['/question-builder']);
    }
  }
}
