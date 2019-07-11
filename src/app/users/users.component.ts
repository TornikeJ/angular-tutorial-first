import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.loginService.blockAccess();
    this.router.navigate(['login']);
  }
}
