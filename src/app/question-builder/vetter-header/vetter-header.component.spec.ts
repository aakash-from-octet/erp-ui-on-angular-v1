import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetterHeaderComponent } from './vetter-header.component';

describe('VetterHeaderComponent', () => {
  let component: VetterHeaderComponent;
  let fixture: ComponentFixture<VetterHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetterHeaderComponent]
    });
    fixture = TestBed.createComponent(VetterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
