import { TestBed } from '@angular/core/testing';

import { Locales } from './locales';

describe('Locales', () => {
  let service: Locales;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Locales);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
