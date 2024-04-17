import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentSummaryComponent } from './assessment-summary.component';

describe('AssessmentSummaryComponent', () => {
  let component: AssessmentSummaryComponent;
  let fixture: ComponentFixture<AssessmentSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentSummaryComponent]
    });
    fixture = TestBed.createComponent(AssessmentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
