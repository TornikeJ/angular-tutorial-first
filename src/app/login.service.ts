import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private userService: UserService) { }

  checkUser(email, password) {
    console.log(this.userService.getAllUsers().find((email) => {
        console.log(email);
    }));
  }
}
