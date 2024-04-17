import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderHeaderComponent } from './builder-header.component';

describe('BuilderHeaderComponent', () => {
  let component: BuilderHeaderComponent;
  let fixture: ComponentFixture<BuilderHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderHeaderComponent]
    });
    fixture = TestBed.createComponent(BuilderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
