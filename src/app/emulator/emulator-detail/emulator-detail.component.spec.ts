import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatorDetailComponent } from './emulator-detail.component';

describe('EmulatorDetailComponent', () => {
  let component: EmulatorDetailComponent;
  let fixture: ComponentFixture<EmulatorDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmulatorDetailComponent]
    });
    fixture = TestBed.createComponent(EmulatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
