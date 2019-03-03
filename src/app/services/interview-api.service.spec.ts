import { TestBed } from '@angular/core/testing';

import { InterviewApiService } from './interview-api.service';

describe('InterviewApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterviewApiService = TestBed.get(InterviewApiService);
    expect(service).toBeTruthy();
  });
});
