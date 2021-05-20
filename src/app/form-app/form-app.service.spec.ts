/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormAppService } from './form-app.service';

describe('Service: FormApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormAppService]
    });
  });

  it('should ...', inject([FormAppService], (service: FormAppService) => {
    expect(service).toBeTruthy();
  }));
});
