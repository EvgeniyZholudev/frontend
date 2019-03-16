import { TestBed } from '@angular/core/testing';

import { SubscriptService } from './subscript.service';

describe('SubscriptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubscriptService = TestBed.get(SubscriptService);
    expect(service).toBeTruthy();
  });
});
