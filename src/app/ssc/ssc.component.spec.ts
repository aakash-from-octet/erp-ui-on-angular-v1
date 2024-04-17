import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SscComponent } from './ssc.component';

describe('SscComponent', () => {
  let component: SscComponent;
  let fixture: ComponentFixture<SscComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SscComponent]
    });
    fixture = TestBed.createComponent(SscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
