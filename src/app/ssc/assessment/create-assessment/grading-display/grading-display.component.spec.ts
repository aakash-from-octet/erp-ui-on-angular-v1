import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingDisplayComponent } from './grading-display.component';

describe('GradingDisplayComponent', () => {
  let component: GradingDisplayComponent;
  let fixture: ComponentFixture<GradingDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradingDisplayComponent]
    });
    fixture = TestBed.createComponent(GradingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
