import { TestBed } from '@angular/core/testing';

import { GifService } from './gif-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GifService', () => {
  let service: GifService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GifService],
    });
    service = TestBed.inject(GifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
