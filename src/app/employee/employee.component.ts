import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { FormBuilder, FormControl } from '@angular/forms';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'translateX(0)'
      })),
      state('close', style({
        display: 'none'
      })),
      transition('* => *', animate('0.2s')
      )
    ])
  ]
})
export class EmployeeComponent implements OnInit {
  employee;
  updateEmployee = false;
  updateForm;
  isInitilized = false;
  constructor(
    private router: Router,
    private routeState: ActivatedRoute,
    private employeesService: EmployeesService,
    private formBuilder: FormBuilder) {
    this.updateForm = this.formBuilder.group({
      name: [''],
      salary: [''],
      age: [''],
    }, {
      });
  }

  ngOnInit() {
    this.routeState.paramMap.subscribe((params) => {
      const employeeId = +params.get('employeeId');
      const employee = this.employeesService.getEmployee(employeeId).subscribe((data) => {
        if (data.id === undefined) {
          window.alert('Employee not found');
          this.router.navigate(['employees']);
        } else {
          this.employee = data;
        }
        this.isInitilized = true;
      });
    });
  }


  get name() {
    return this.updateForm.get('name') as FormControl;
  }

  get salary() {
    return this.updateForm.get('salary') as FormControl;
  }

  get age() {
    return this.updateForm.get('age') as FormControl;
  }

  updateEmployeeForm() {
    this.isInitilized = false;
    if (this.updateEmployee) {
      this.employeesService.updateEmployee(this.employee.id, {
        name: this.name.value || this.employee.name,
        salary: this.salary.value || this.employee.salary,
        age: this.age.value || this.employee.age
      }).subscribe();

      this.isInitilized = true;
      return this.updateEmployee = false;
    }
    return this.updateEmployee = true;

  }
  deleteEmployee() {
    this.isInitilized = false;
    this.router.navigate(['employees']);
    this.isInitilized = true;
    return this.employeesService.deleteEmployee(this.employee.id).subscribe();
  }
}
