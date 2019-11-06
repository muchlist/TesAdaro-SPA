/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisService } from './regis.service';

describe('Service: Regis', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisService]
    });
  });

  it('should ...', inject([RegisService], (service: RegisService) => {
    expect(service).toBeTruthy();
  }));
});
