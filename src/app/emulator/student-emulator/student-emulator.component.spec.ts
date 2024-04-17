import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEmulatorComponent } from './student-emulator.component';

describe('StudentEmulatorComponent', () => {
  let component: StudentEmulatorComponent;
  let fixture: ComponentFixture<StudentEmulatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentEmulatorComponent]
    });
    fixture = TestBed.createComponent(StudentEmulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
