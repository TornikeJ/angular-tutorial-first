import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isAccessAllowed = false;

  constructor(private userService: UserService) { }

  checkUser(emailLogin, passwordLogin) {
    for (let user of this.userService.getAllUsers()) {
      if (user['email'] === emailLogin && user['password'] === passwordLogin) {
        return this.allowAccess();
      }
    }
    return this.blockAccess();
  }

  isUserAuthenticated() {
    return this.isAccessAllowed;
  }

  allowAccess() {
    this.isAccessAllowed = true;
  }

  blockAccess() {
    this.isAccessAllowed = false;
  }
}
