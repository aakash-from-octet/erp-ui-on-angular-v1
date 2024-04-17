import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicableExamComponent } from './applicable-exam.component';

describe('ApplicableExamComponent', () => {
  let component: ApplicableExamComponent;
  let fixture: ComponentFixture<ApplicableExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicableExamComponent]
    });
    fixture = TestBed.createComponent(ApplicableExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
