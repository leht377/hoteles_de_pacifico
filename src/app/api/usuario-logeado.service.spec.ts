import { TestBed } from '@angular/core/testing';

import { UsuarioLogeadoService } from './usuario-logeado.service';

describe('UsuarioLogeadoService', () => {
  let service: UsuarioLogeadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioLogeadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
