import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class E2e3exService {

  constructor(protected http: HttpClient) { }

  getUbigeos() {
    return this.http.get('assets/txt/ubigeos.txt', { responseType: 'text' });
  }
}
