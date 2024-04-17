import { Component } from '@angular/core';
import { QuestionListService } from '../../services/question-list.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reverted-list',
  templateUrl: './reverted-list.component.html',
  styleUrls: ['./reverted-list.component.scss'],
})
export class RevertedListComponent {
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
    if (this.userValue === 't1') {
      this.router.navigate(['/question-builder']);
    }
  }
}
