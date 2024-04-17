import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAllocationComponent } from './vendor-allocation.component';

describe('VendorAllocationComponent', () => {
  let component: VendorAllocationComponent;
  let fixture: ComponentFixture<VendorAllocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorAllocationComponent]
    });
    fixture = TestBed.createComponent(VendorAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
