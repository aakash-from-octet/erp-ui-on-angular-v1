import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertedGridComponent } from './reverted-grid.component';

describe('RevertedGridComponent', () => {
  let component: RevertedGridComponent;
  let fixture: ComponentFixture<RevertedGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevertedGridComponent]
    });
    fixture = TestBed.createComponent(RevertedGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
