import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employeeList: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.employeeList = [
      { id: 1, name: 'emp1', salary: 2000 },
      { id: 2, name: 'emp2', salary: 6000 },
      { id: 3, name: 'emp3', salary: 3000 }
    ]
  }

  getDetails(data:any) {
    this.router.navigate(['admin/employee/',data.id]);
  }

}
