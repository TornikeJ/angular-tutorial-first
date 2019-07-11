import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [];

  constructor() { }

  addUser(user) {
    this.users.push(user.value);
    console.log(this.users);
  }

  getAllUsers() {
    return this.users;
  }
}
