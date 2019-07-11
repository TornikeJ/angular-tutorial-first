import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})

export class TopBarComponent implements OnInit {
    constructor(
        private loginService: LoginService,
    ) { }

    ngOnInit() {

    }

    checkUser() {
        if (this.loginService.isUserAuthenticated()) {
            return true;
        }
        return false;
    }
}