import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  signedIn = {status: false, currentUser: null};

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.signedIn.status) {
        return true;
      }

  }
  constructor (private authService:AuthService) {
    this.authService.signedIn.subscribe(signedIn => {
      this.signedIn = signedIn;
      console.log(this.signedIn);

    })
  }

}
