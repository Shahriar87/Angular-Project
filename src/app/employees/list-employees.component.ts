import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  // employeeToDisplay: Employee;
  // private arrayIndex = 1;
  constructor(private _employeeService: EmployeeService,
              private _router: Router) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

  // nextEmployee(): void{
  //   if(this.arrayIndex <= 3){
  //     this.employeeToDisplay = this.employees[this.arrayIndex];
  //     this.arrayIndex++;      
  //   } else {
  //     this.employeeToDisplay = this.employees[0];
  //     this.arrayIndex = 1;    
  //   }
  // }

  onClick(employeeId: number){
    this._router.navigate(['/employees', employeeId])
  }





}
