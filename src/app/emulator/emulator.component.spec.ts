import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatorComponent } from './emulator.component';

describe('EmulatorComponent', () => {
  let component: EmulatorComponent;
  let fixture: ComponentFixture<EmulatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmulatorComponent]
    });
    fixture = TestBed.createComponent(EmulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
