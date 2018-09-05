import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthLoggedService implements CanActivate {

  constructor(
    public auth: AuthService,
    public router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['perfil']);
      return false;
    }
    return true;
  }
}
