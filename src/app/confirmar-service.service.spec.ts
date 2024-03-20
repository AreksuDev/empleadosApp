import { TestBed } from '@angular/core/testing';

import { ConfirmarServiceService } from './confirmar-service.service';

describe('ConfirmarServiceService', () => {
  let service: ConfirmarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
