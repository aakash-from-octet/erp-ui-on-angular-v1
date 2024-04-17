import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransevalViewComponent } from './transeval-view.component';

describe('TransevalViewComponent', () => {
  let component: TransevalViewComponent;
  let fixture: ComponentFixture<TransevalViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransevalViewComponent]
    });
    fixture = TestBed.createComponent(TransevalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
