import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
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
      } else {
        this.router.navigateByUrl('/');
      }
    }
  constructor (
    private authService:AuthService,
    private router:Router
  ) {
    this.authService.signedIn.subscribe(signedIn => {
      this.signedIn = signedIn;
      console.log(this.signedIn);
    })
  }
}
