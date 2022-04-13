import { TestBed } from '@angular/core/testing';

import { ExerciseEmmiterService } from './exercise-emmiter.service';

describe('ExerciseEmmiterService', () => {
  let service: ExerciseEmmiterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseEmmiterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
