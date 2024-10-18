import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable, of, shareReplay, tap } from 'rxjs';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly mockUser: User = {
    nroDocument: '123456789',
    token: 'fake-jwt-token',
    username: 'admin',
  };

  // public currentUserSubject = new BehaviorSubject<User | null>(null);

  // Set the current user simulation
  public currentUserSubject = new BehaviorSubject<User | null>(this.mockUser);

  private readonly currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  public isAuthenticatedSubject = this.currentUser.pipe(map(user => !!user));

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly jtwtService: JwtService
  ) { }

  login_nroDocument(credentials: {
    nroDocument: string,
    remember: boolean,
    recaptchaToken: string
  }): Observable<{ user: User }> {
    return this.http
      .post<any>('/login', {
        credentials
      }).pipe(
        tap(({ user }) => this.setAuth(user))
      )
  }

  login_admin(credentials: {
    username: string,
    password: string,
    remember: boolean
  }): Observable<{ user: User }> {
    return this.http
      .post<{ user: User }>('/login', {
        credentials
      }).pipe(
        tap(({ user }) => this.setAuth(user))
      )
  }

  register(credentials: {
    username: string,
    password: string
  }): Observable<{ user: User }> {
    return this.http
      .post<{ user: User }>('/register', {
        credentials
      }).pipe(
        tap(({ user }) => this.setAuth(user))
      )
  }

  getCurrentUser(): Observable<User> {
    // return this.http
    //   .get<User>('/user')
    //   .pipe(tap({
    //     next: user => this.setAuth(),
    //     error: () => this.logout()
    //   }),
    //     shareReplay(1),
    //   );
    return of(this.mockUser);
  }

  setAuth(user: User): void {
    this.jtwtService.saveToken(user.token);
    this.currentUserSubject.next(user);
  }

  logout(): void {
    this.jtwtService.destroyToken();
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }
}
