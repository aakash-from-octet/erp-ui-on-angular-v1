import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDetailsComponent } from './preview-details.component';

describe('PreviewDetailsComponent', () => {
  let component: PreviewDetailsComponent;
  let fixture: ComponentFixture<PreviewDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewDetailsComponent]
    });
    fixture = TestBed.createComponent(PreviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
