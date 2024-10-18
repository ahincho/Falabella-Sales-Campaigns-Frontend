import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  api_url = "http://localhost:3000";

  constructor(
    private readonly http: HttpClient
  ) { }

  getCouponCodes(nroDocument: string): Observable<Client[]> {
    return this.http.get<Client[]>(
      `${this.api_url}/api/v1/coupon/${nroDocument}`
    );
  }
}
