import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
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
export class EmployeesComponent implements OnInit {

  employees$;
  isInitilized = false;

  constructor(
    private employeesService: EmployeesService
  ) { }

  ngOnInit() {
    this.employees$ = this.employeesService.getEmployees();
    this.isInitilized = true;
  }

}
