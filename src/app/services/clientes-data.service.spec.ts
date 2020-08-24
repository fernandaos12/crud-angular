import { TestBed } from '@angular/core/testing';

import { ClientesDataService } from './clientes-data.service';

describe('ClientesDataService', () => {
  let service: ClientesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
