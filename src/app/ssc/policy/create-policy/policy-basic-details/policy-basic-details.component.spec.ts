import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyBasicDetailsComponent } from './policy-basic-details.component';

describe('PolicyBasicDetailsComponent', () => {
  let component: PolicyBasicDetailsComponent;
  let fixture: ComponentFixture<PolicyBasicDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyBasicDetailsComponent]
    });
    fixture = TestBed.createComponent(PolicyBasicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
