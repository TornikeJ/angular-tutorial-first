import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]],
      confirmPass: ['', [Validators.required]],
      nickname: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.minLength(7)]],
      website: ['', [Validators.required]]
    }, {
        // validators: this.crossValidation
      });
  }

  //   static isZipValid(zip) {
  //   return zip.length < 3;
  // }
  //   static isCityValid(city) {
  //   return city && city[0].toLowerCase() === 'a';
  // }
  // crossValidation(formGroup) {
  //   const zip = formGroup.get('zip').value;
  //   const zipStatus = RegisterComponent.isZipValid(zip);

  //   const city = formGroup.get('city').value;
  //   const cityStatus = RegisterComponent.isCityValid(city);

  //   const validationResult = {
  //     zipStatus,
  //     cityStatus
  //   };

  //   return validationResult.zipStatus && validationResult.cityStatus ? null : validationResult;
  // }
  ngOnInit() {
  }

}
