import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss']
})
export class EmployeeRegisterComponent implements OnInit {
  registerForm;
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeesService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: [''],
      salary: [''],
      age: [''],
    }, {
      });

  }

  onSubmit(form) {
    if (form.status === 'VALID') {
      this.employeeService.addEmployees(form.value).subscribe();
      form.reset();
    } else {
      window.alert('Fill required fields');
    }
  }


  get name() {
    return this.registerForm.get('name') as FormControl;
  }
  get age() {
    return this.registerForm.get('age') as FormControl;
  }
  get salary() {
    return this.registerForm.get('salary') as FormControl;
  }

}

