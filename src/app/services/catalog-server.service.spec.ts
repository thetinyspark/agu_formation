import { TestBed } from '@angular/core/testing';

import { CatalogServerService } from './catalog-server.service';

describe('CatalogServerService', () => {
  let service: CatalogServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
