import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCardsComponent } from './color-cards.component';

describe('ColorCardsComponent', () => {
  let component: ColorCardsComponent;
  let fixture: ComponentFixture<ColorCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorCardsComponent]
    });
    fixture = TestBed.createComponent(ColorCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
