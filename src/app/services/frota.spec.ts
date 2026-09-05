import { TestBed } from '@angular/core/testing';

import { Frota } from './frota';

describe('Frota', () => {
  let service: Frota;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Frota);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
