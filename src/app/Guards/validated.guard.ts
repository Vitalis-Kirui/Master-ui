import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { UserService } from '../Services/user.service';

@Injectable({
  providedIn: 'root',
})
export class ValidatedGuard implements CanActivate {

  constructor(private router: Router, private service: UserService) {}

  canActivate(): any {
    if (this.service.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['authentications/login']);
      return false;
    }
  }
}
