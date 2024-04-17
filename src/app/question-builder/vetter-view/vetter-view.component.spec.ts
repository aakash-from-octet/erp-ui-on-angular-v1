import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetterViewComponent } from './vetter-view.component';

describe('VetterViewComponent', () => {
  let component: VetterViewComponent;
  let fixture: ComponentFixture<VetterViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetterViewComponent]
    });
    fixture = TestBed.createComponent(VetterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
