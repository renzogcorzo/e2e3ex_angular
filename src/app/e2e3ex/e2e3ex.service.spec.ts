import { TestBed } from '@angular/core/testing';

import { E2e3exService } from './e2e3ex.service';


import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('E2e3exService', () => {

  let spy: any;
  let httpTestingController: HttpTestingController;
  let service: E2e3exService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [E2e3exService],
      imports: [HttpClientTestingModule]
    });

    // We inject our service (which imports the HttpClient) and the Test Controller
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(E2e3exService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get ubigeos', () => {
    const mockData: any = "test";

    const service: E2e3exService = TestBed.get(E2e3exService);

    service.getUbigeos()
      .subscribe(ubigeos => {
        expect(ubigeos).toEqual('test');
      });

    const req = httpTestingController.expectOne('assets/txt/ubigeos.txt');
    req.flush(mockData);

  });

});
