import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employee;
  updateEmployee = false;
  updateForm;

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
    if (this.updateEmployee) {
      this.employeesService.updateEmployee(this.employee.id, {
        name: this.name.value || this.employee.name,
        salary: this.salary.value || this.employee.salary,
        age: this.age.value || this.employee.age
      }).subscribe();

      return this.updateEmployee = false;
    }
    return this.updateEmployee = true;
  }
  deleteEmployee() {
    this.router.navigate(['employees']);
    return this.employeesService.deleteEmployee(this.employee.id).subscribe();
  }
}
