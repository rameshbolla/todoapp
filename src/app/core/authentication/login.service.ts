import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IdentityToken, Token, User } from './interface';
import { Menu } from '@core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(protected http: HttpClient) {}

  login(email: string, password: string, rememberMe = false) {
    return this.http.post<IdentityToken>('api/account/login', { email, password, rememberMe });
  }

  refresh(params: Record<string, any>) {
    return this.http.post<IdentityToken>('api/account/refresh', params);
  }

  logout() {
    return this.http.post<any>('api/account/logout', {});
  }

  me() {
    return this.http.get<User>('api/account/me');
  }

  menu() {
    return this.http.get<Menu[]>('api/account/menu').pipe(map(res => res));
  }
}
