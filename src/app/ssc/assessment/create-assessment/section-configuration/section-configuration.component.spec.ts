import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionConfigurationComponent } from './section-configuration.component';

describe('SectionConfigurationComponent', () => {
  let component: SectionConfigurationComponent;
  let fixture: ComponentFixture<SectionConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionConfigurationComponent]
    });
    fixture = TestBed.createComponent(SectionConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
