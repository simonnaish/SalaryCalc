import { TestBed } from '@angular/core/testing';

import { DataResolverService } from './data-resolver.service'

describe('Resolvers.DataResolverService', () => {
  let service: DataResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
