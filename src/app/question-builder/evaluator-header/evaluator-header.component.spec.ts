import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatorHeaderComponent } from './evaluator-header.component';

describe('EvaluatorHeaderComponent', () => {
  let component: EvaluatorHeaderComponent;
  let fixture: ComponentFixture<EvaluatorHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluatorHeaderComponent]
    });
    fixture = TestBed.createComponent(EvaluatorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
