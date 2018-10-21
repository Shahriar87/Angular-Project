import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: "John",
      gender: "Male",
      contactPreference: "Email",
      email: "john@gmail.com",
      dateOfBirth: new Date("10/25/1988"),
      department: "IT",
      isActive: true,
      photoPath: "../../assets/images/employee1.jpg"
    },
    {
      id: 2,
      name: "Shah",
      gender: "Male",
      contactPreference: "Phone",
      phoneNumber: 2435678769,
      dateOfBirth: new Date("11/24/1979"),
      department: "HR",
      isActive: true,
      photoPath: "../../assets/images/employee2.jpg"
    },
    {
      id: 3,
      name: "Sarah",
      gender: "Female",
      contactPreference: "Phone",
      phoneNumber: 5463789208,
      dateOfBirth: new Date("3/25/1976"),
      department: "IT",
      isActive: false,
      photoPath: "../../assets/images/employee3.jpg"
    }, 
    {
      id: 4,
      name: "Susan",
      gender: "Female",
      contactPreference: "Email",
      email: "susan@gmail.com",
      dateOfBirth: new Date("5/4/1994"),
      department: "IT",
      isActive: true,
      photoPath: "../../assets/images/employee3.jpg"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
