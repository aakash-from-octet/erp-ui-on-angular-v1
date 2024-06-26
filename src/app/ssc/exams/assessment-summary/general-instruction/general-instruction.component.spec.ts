import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInstructionComponent } from './general-instruction.component';

describe('GeneralInstructionComponent', () => {
  let component: GeneralInstructionComponent;
  let fixture: ComponentFixture<GeneralInstructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralInstructionComponent]
    });
    fixture = TestBed.createComponent(GeneralInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
