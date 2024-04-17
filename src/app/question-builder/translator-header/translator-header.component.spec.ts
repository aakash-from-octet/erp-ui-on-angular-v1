import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatorHeaderComponent } from './translator-header.component';

describe('TranslatorHeaderComponent', () => {
  let component: TranslatorHeaderComponent;
  let fixture: ComponentFixture<TranslatorHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranslatorHeaderComponent]
    });
    fixture = TestBed.createComponent(TranslatorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
