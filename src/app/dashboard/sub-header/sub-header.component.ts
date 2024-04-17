import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent {
  isVisible = false;
  selectedValue = null;
  questionType: string | null = null;
  topicInput: string | null = null;
  subtopicInput: string | null = null;
  userValue: string = '';
  constructor(private router: Router, private sharedService: SharedService) {
    this.userValue = this.sharedService.getInputValue();
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.router.navigate(['/question-builder']);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  selectQuestionType(type: string): void {
    this.questionType = type;
    console.log('Selected Question Type:', this.questionType);
  }

  onSubjectSelected(value: string): void {
    console.log('Selected Subject:', value);
  }
}
