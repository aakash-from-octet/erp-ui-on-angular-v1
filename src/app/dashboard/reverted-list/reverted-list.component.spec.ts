import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertedListComponent } from './reverted-list.component';

describe('RevertedListComponent', () => {
  let component: RevertedListComponent;
  let fixture: ComponentFixture<RevertedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevertedListComponent]
    });
    fixture = TestBed.createComponent(RevertedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
