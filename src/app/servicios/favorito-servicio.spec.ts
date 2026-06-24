import { TestBed } from '@angular/core/testing';

import { FavoritoServicio } from './favorito-servicio';

describe('FavoritoServicio', () => {
  let service: FavoritoServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritoServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
