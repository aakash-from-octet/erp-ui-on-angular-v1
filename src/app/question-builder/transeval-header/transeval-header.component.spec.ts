import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransevalHeaderComponent } from './transeval-header.component';

describe('TransevalHeaderComponent', () => {
  let component: TransevalHeaderComponent;
  let fixture: ComponentFixture<TransevalHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransevalHeaderComponent]
    });
    fixture = TestBed.createComponent(TransevalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
