import { TestBed } from '@angular/core/testing';

import { ExamsListService } from './exams-list.service';

describe('ExamsListService', () => {
  let service: ExamsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
