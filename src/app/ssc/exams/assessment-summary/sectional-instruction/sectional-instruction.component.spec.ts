import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionalInstructionComponent } from './sectional-instruction.component';

describe('SectionalInstructionComponent', () => {
  let component: SectionalInstructionComponent;
  let fixture: ComponentFixture<SectionalInstructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionalInstructionComponent]
    });
    fixture = TestBed.createComponent(SectionalInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
