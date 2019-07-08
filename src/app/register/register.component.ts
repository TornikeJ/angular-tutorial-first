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
      password: ['', [Validators.required, Validators.pattern('^[a-zA-Z-0-9]*$'), Validators.minLength(7)]],
      confirmPass: ['', [Validators.required]],
      nickname: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]*$')]],
      phoneNumber: ['', [Validators.required, this.forbiddenNumber()]],
      website: ['', [Validators.required]]
    }, {
      });
  }

  forbiddenNumber() {
    return (formControl) => {
      const val = formControl.value.toString();
      return val.substring(0, 4) === '+380' ? { forbiddenNumber: { invalid: false } } : null;
    }
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
