import { Component } from '@angular/core';
import { QuestionListService } from '../../services/question-list.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reverted-grid',
  templateUrl: './reverted-grid.component.html',
  styleUrls: ['./reverted-grid.component.scss'],
})
export class RevertedGridComponent {
  constructor(
    private QuestionListService: QuestionListService,
    private sharedService: SharedService,
    private router: Router
  ) {
    this.userValue = this.sharedService.getInputValue();
  }
  data: any[] = [];
  userValue: string = '';
  ngOnInit() {
    this.QuestionListService.getData().subscribe((data: any[]) => {
      this.data = data;
    });
  }
  goToBuilder() {
    if (this.userValue === 't1') {
      this.router.navigate(['/question-builder']);
    }
  }
}
