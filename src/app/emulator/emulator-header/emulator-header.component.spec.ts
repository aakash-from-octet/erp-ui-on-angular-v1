import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatorHeaderComponent } from './emulator-header.component';

describe('EmulatorHeaderComponent', () => {
  let component: EmulatorHeaderComponent;
  let fixture: ComponentFixture<EmulatorHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmulatorHeaderComponent]
    });
    fixture = TestBed.createComponent(EmulatorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
