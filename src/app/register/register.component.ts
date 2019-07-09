import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm;
  userAgreed;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^[a-zA-Z-0-9]*$'), Validators.minLength(8)]],
      confirmPass: ['', [Validators.required]],
      nickname: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]*$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9_]*$')]],
      website: ['', [Validators.required, Validators.pattern('^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}')]],
      checkbox: ['', [Validators.required]],
    }, {
      });
  }

  isPasswordMatched(password, passwordMatch) {
    return password.value === passwordMatch.value;
  }
  isChecked(agreement) {
    if (agreement.target.checked) {
      this.userAgreed = true;
    } else {
      this.userAgreed = false;
    }
  }
  // crossValidation(formGroup) {
  //   const password = formGroup.get('password').value;
  //   const passwordMatch = formGroup.get('confirmPass').value;

  //   const passwordStatus = RegisterComponent.isPasswordMatched(password, passwordMatch);


  //   const validationResult = {
  //     passwordStatus,
  //   };

  //   return validationResult.passwordStatus ? null : validationResult;
  // }

  get email() {
    return this.registerForm.get('email') as FormControl;
  }
  get password() {
    return this.registerForm.get('password') as FormControl;
  }
  get confirmPass() {
    return this.registerForm.get('confirmPass') as FormControl;
  }
  get nickname() {
    return this.registerForm.get('nickname') as FormControl;
  }
  get phoneNumber() {
    return this.registerForm.get('phoneNumber') as FormControl;
  }
  get website() {
    return this.registerForm.get('website') as FormControl;
  }


  ngOnInit() {
  }

}
