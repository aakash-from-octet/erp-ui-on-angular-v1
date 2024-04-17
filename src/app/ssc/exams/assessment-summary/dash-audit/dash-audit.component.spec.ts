import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAuditComponent } from './dash-audit.component';

describe('DashAuditComponent', () => {
  let component: DashAuditComponent;
  let fixture: ComponentFixture<DashAuditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashAuditComponent]
    });
    fixture = TestBed.createComponent(DashAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
