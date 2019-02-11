import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userEmail: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() { }

  getUser(): Observable<string> {
    return this._userEmail.asObservable();
  }

  setUser(userName) {
    this._userEmail.next(userName);
  }

  logout() {
    this.setUser(null);
  }
}
