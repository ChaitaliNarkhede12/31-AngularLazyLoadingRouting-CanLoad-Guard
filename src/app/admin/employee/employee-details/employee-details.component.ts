import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  public id: number = 0;

  public employeeList: any[] = [];

  public employee: any;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });

    this.getEmployeeList();
    this.getEmployeeDetails(this.id);
  }

  getEmployeeList() {
    this.employeeList = [
      { id: 1, name: 'emp1', salary: 2000 },
      { id: 2, name: 'emp2', salary: 6000 },
      { id: 3, name: 'emp3', salary: 3000 }
    ]
  }

  getEmployeeDetails(id: number) {
    this.employee = this.employeeList.find(x => x.id == id);
  }

  backToList() {
    this.router.navigate(['admin/employee/']);
  }
}
