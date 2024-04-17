import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyOverviewComponent } from './policy-overview.component';

describe('PolicyOverviewComponent', () => {
  let component: PolicyOverviewComponent;
  let fixture: ComponentFixture<PolicyOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyOverviewComponent]
    });
    fixture = TestBed.createComponent(PolicyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
