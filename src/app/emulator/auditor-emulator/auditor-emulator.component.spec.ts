import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorEmulatorComponent } from './auditor-emulator.component';

describe('AuditorEmulatorComponent', () => {
  let component: AuditorEmulatorComponent;
  let fixture: ComponentFixture<AuditorEmulatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditorEmulatorComponent]
    });
    fixture = TestBed.createComponent(AuditorEmulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
