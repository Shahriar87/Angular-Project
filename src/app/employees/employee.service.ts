import { Injectable } from "@angular/core";
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [
        {
          id: 1,
          name: "John",
          gender: "Male",
          contactPreference: "Email",
          email: "john@gmail.com",
          dateOfBirth: new Date("10/25/1988"),
          department: "3",
          isActive: true,
          photoPath: "../../assets/images/employee1.jpg"
        },
        {
          id: 2,
          name: "Shahriar",
          gender: "Male",
          contactPreference: "Phone",
          phoneNumber: 2435678769,
          dateOfBirth: new Date("11/24/1979"),
          department: "2",
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
          department: "3",
          isActive: false,
          photoPath: "../../assets/images/employee3.jpg"
        },
        {
          id: 4,
          name: "Sunil",
          gender: "Male",
          contactPreference: "Email",
          email: "susan@gmail.com",
          dateOfBirth: new Date("5/4/1994"),
          department: "3",
          isActive: true,
          photoPath: "../../assets/images/employee4.jpg"
        }
      ];

      getEmployees(): Employee[] {
          return this.listEmployees
      }

      save(employee: Employee){
          this.listEmployees.push(employee);
      }
}
