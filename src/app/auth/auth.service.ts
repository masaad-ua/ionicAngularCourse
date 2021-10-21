import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";


export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = true;
  private _userId = 'abc';

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get userId() {
    return this._userId;
  }

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
          environment.firebaseAPIKey
        }`,
        { email, password, returnSecureToken: true }
      )
      .pipe(tap(this.setUserData.bind(this)));
  }

  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
  }
}
