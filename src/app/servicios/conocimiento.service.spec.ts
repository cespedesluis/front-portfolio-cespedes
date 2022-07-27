import { TestBed } from '@angular/core/testing';

import { ConocimientoService } from './conocimiento.service';

describe('ConocimientoService', () => {
  let service: ConocimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConocimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
