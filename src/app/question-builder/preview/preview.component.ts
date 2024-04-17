import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent {
  constructor(private router: Router, private sharedService: SharedService) {}
  selected = 'A';
  questionType: string | null = null;

  radioOptions = [
    { id: 'A', value: 'Only conclusion IV follows', isSelected: false },
    { id: 'B', value: 'Only conclusions II and III follow', isSelected: false },
    { id: 'C', value: 'Only conclusions I and II follow', isSelected: false },
    { id: 'D', value: 'Only conclusion III follows', isSelected: false },
  ];
  radioOptions1 = [
    { id: 'A', value: 'a1', isSelected: false },
    { id: 'B', value: 'a2', isSelected: false },
    { id: 'C', value: 'a3', isSelected: false },
    { id: 'D', value: 'a4', isSelected: false },
  ];
  radioOptions2 = [
    { id: 'A', value: 'a21', isSelected: false },
    { id: 'B', value: 'a22', isSelected: false },
    { id: 'C', value: 'a23', isSelected: false },
    { id: 'D', value: 'a24', isSelected: false },
  ];
  @Output() backClicked = new EventEmitter<void>();
  onBackButtonClick() {
    this.backClicked.emit();
  }
  ngOnInit() {
    this.sharedService.questionType$.subscribe((questionType) => {
      this.questionType = questionType;
    });
  }
}
