import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employee;
  employeeId;

  constructor(
    private routeState: ActivatedRoute,
    private employeesService: EmployeesService) {
  }

  ngOnInit() {
    this.routeState.paramMap.subscribe((params) => {
      const employeeId = +params.get('employeeId');
      const employee = this.employeesService.getEmployee(employeeId).subscribe((data) => {
        this.employee = data;
      });
    });
  }
}
