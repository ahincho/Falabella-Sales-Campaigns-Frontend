import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  api_url = "http://localhost:3000";

  constructor(
    private readonly http: HttpClient
  ) { }

  getCouponCodes(nroDocument: string): Observable<Client[]> {
    // return this.http.get<Client[]>(
    //   `${this.api_url}/api/v1/coupon/${nroDocument}`
    // );
    const mockCoupons: Client[] = [
      {clientId: '123456', couponCodeBar: '123456', couponCodeWeb: '123456', date: '2022-01-01', couponId: '123456', campaign: '123456', cuponType: '123456'},
      {clientId: '123456', couponCodeBar: '123456', couponCodeWeb: '123456', date: '2022-01-01', couponId: '123456', campaign: '123456', cuponType: '123456'},
      {clientId: '123456', couponCodeBar: '123456', couponCodeWeb: '123456', date: '2022-01-01', couponId: '123456', campaign: '123456', cuponType: '123456'},
      {clientId: '123456', couponCodeBar: '123456', couponCodeWeb: '123456', date: '2022-01-01', couponId: '123456', campaign: '123456', cuponType: '123456'},
      {clientId: '123456', couponCodeBar: '123456', couponCodeWeb: '123456', date: '2022-01-01', couponId: '123456', campaign: '123456', cuponType: '123456'},
      {clientId: '123456', couponCodeBar: '123456', couponCodeWeb: '123456', date: '2022-01-01', couponId: '123456', campaign: '123456', cuponType: '123456'},
      {clientId: '123456', couponCodeBar: '123456', couponCodeWeb: '123456', date: '2022-01-01', couponId: '123456', campaign: '123456', cuponType: '123456'},
      {clientId: '123456', couponCodeBar: '123456', couponCodeWeb: '123456', date: '2022-01-01', couponId: '123456', campaign: '123456', cuponType: '123456'}
    ]

    return of(mockCoupons);
  }
}
