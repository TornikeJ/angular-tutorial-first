import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;


  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: [],
      password: []
    }, {
      });
  }
  ngOnInit() {
  }

  get email() {
    return this.loginForm.get('email') as FormControl;
  }
  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit(form) {
    this.loginService.checkUser(form.value['email'], form.value['password']);
    form.reset();
    if (this.loginService.isUserAuthenticated()) {
      this.router.navigate(['users']);
    } else {
      window.alert('Sorry, this user doesn\'t exist');
    }

  }
}
