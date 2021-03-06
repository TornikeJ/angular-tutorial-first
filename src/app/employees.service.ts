import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface IEmployee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
}
interface AddEmployee {
  name: {
    type: string,
    required: true
  };
  salary: {
    type: number,
    required: true
  };
  age: {
    type: number,
    required: true
  };
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  host = 'http://dummy.restapiexample.com/api/v1';
  constructor(
    private httpClient: HttpClient
  ) { }

  getEmployees() {
    const url = `${this.host}/employees`;

    return this.httpClient.get(url)
      .pipe(map((employees: Array<IEmployee>) => {
        const employeesTransformed = employees.map((employee) => {
          const { id, employee_name, employee_salary, employee_age } = employee;

          const employeeTransformed = {
            id,
            name: employee_name,
            salary: employee_salary,
            age: employee_age
          };
          return employeeTransformed;
        });
        return employeesTransformed;
      }));
  }
  getEmployee(id) {
    const url = `${this.host}/employee/${id}`;

    return this.httpClient.get(url).pipe(map((employee: IEmployee) => {

      const { id, employee_name, employee_salary, employee_age } = employee;

      return {
        id,
        name: employee_name,
        salary: employee_salary,
        age: employee_age
      };

    }));
  }
  addEmployees(employee: AddEmployee): Observable<AddEmployee> {
    const url = `${this.host}/create`;

    return this.httpClient.post<AddEmployee>(url, employee);
  }

  updateEmployee(id, employee) {
    const url = `${this.host}/update/${id}`;
    return this.httpClient.put(url, JSON.stringify(employee));
  }
  deleteEmployee(id) {
    const url = `${this.host}/delete/${id}`;
    return this.httpClient.delete(url);
  }
}
