import { Component } from '@angular/core';

@Component({
  selector: 'app-complexity',
  templateUrl: './complexity.component.html',
  styleUrls: ['./complexity.component.scss'],
})
export class ComplexityComponent {
  gradeLevelPairs: { grade: string; showLevelSelect: boolean }[] = [];

  onGradeSelectChange(pair: { grade: string; showLevelSelect: boolean }): void {
    pair.showLevelSelect = !!pair.grade;
  }

  onChooseGradeClick(): void {
    // Add a new pair for grade and level
    this.gradeLevelPairs.push({ grade: '', showLevelSelect: false });
  }

  onRemoveGradeClick(index: number): void {
    // Remove the pair at the specified index
    this.gradeLevelPairs.splice(index, 1);
  }
}
