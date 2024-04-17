import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatorViewComponent } from './translator-view.component';

describe('TranslatorViewComponent', () => {
  let component: TranslatorViewComponent;
  let fixture: ComponentFixture<TranslatorViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranslatorViewComponent]
    });
    fixture = TestBed.createComponent(TranslatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
